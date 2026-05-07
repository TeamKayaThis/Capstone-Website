import { prisma } from '@/src/prisma/client';
import {
  hashPassword,
  comparePassword,
  generateRandomToken,
} from '@/src/lib/auth/password';
import { generateToken } from '@/src/lib/auth/jwt';
import { ErrorResponses } from '@/src/lib/api/response';
import type {
  RegisterInput,
  LoginInput,
  ForgotPasswordInput,
  ResetPasswordInput,
} from '@/src/validators/schemas';

/**
 * Register a new user
 */
export async function registerUser(input: RegisterInput) {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw ErrorResponses.ALREADY_EXISTS('User with this email');
  }

  // Hash password
  const password_hash = await hashPassword(input.password);

  // Create user
  const user = await prisma.user.create({
    data: {
      email: input.email,
      password_hash,
      first_name: input.first_name,
      last_name: input.last_name,
      is_email_verified: false,
    },
  });

  // Generate email verification token
  const verificationToken = generateRandomToken();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  await prisma.emailVerification.create({
    data: {
      user_id: user.id,
      token: verificationToken,
      expires_at: expiresAt,
    },
  });

  // Generate JWT token
  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
    },
    token,
    verificationToken, // Send via email in production
  };
}

/**
 * Login user
 */
export async function loginUser(input: LoginInput) {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw ErrorResponses.INVALID_CREDENTIALS();
  }

  // Check if user is active
  if (!user.is_active) {
    throw new Error('This account has been deactivated');
  }

  // Verify password
  const passwordValid = await comparePassword(
    input.password,
    user.password_hash
  );

  if (!passwordValid) {
    throw ErrorResponses.INVALID_CREDENTIALS();
  }

  // Generate JWT token
  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
      is_email_verified: user.is_email_verified,
    },
    token,
  };
}

/**
 * Request password reset
 */
export async function requestPasswordReset(input: ForgotPasswordInput) {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    // Don't reveal if user exists for security
    return {
      message:
        'If a user with that email exists, a password reset link has been sent',
    };
  }

  // Generate reset token
  const token = generateRandomToken();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await prisma.passwordReset.create({
    data: {
      user_id: user.id,
      token,
      expires_at: expiresAt,
    },
  });

  return {
    message:
      'If a user with that email exists, a password reset link has been sent',
    resetToken: token, // In production, send via email only
  };
}

/**
 * Reset password
 */
export async function resetPassword(input: ResetPasswordInput) {
  // Find reset token
  const resetRecord = await prisma.passwordReset.findUnique({
    where: { token: input.token },
  });

  if (!resetRecord) {
    throw ErrorResponses.NOT_FOUND('Reset token');
  }

  // Check if token is expired
  if (resetRecord.expires_at < new Date()) {
    throw new Error('Reset token has expired');
  }

  // Check if token was already used
  if (resetRecord.used_at) {
    throw new Error('Reset token has already been used');
  }

  // Hash new password
  const password_hash = await hashPassword(input.password);

  // Update user password and mark token as used
  await prisma.user.update({
    where: { id: resetRecord.user_id },
    data: { password_hash },
  });

  await prisma.passwordReset.update({
    where: { id: resetRecord.id },
    data: { used_at: new Date() },
  });

  return { message: 'Password has been reset successfully' };
}

/**
 * Verify email
 */
export async function verifyEmail(token: string) {
  // Find verification record
  const verificationRecord = await prisma.emailVerification.findUnique({
    where: { token },
  });

  if (!verificationRecord) {
    throw ErrorResponses.NOT_FOUND('Verification token');
  }

  // Check if token is expired
  if (verificationRecord.expires_at < new Date()) {
    throw new Error('Verification token has expired');
  }

  // Check if already verified
  if (verificationRecord.verified_at) {
    throw new Error('Email has already been verified');
  }

  // Mark email as verified
  await prisma.user.update({
    where: { id: verificationRecord.user_id },
    data: { is_email_verified: true },
  });

  await prisma.emailVerification.update({
    where: { id: verificationRecord.id },
    data: { verified_at: new Date() },
  });

  return { message: 'Email has been verified successfully' };
}

/**
 * Get user by ID
 */
export async function getUserById(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      role: true,
      is_email_verified: true,
      avatar_url: true,
      created_at: true,
    },
  });

  if (!user) {
    throw ErrorResponses.NOT_FOUND('User');
  }

  return user;
}
