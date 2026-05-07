import { prisma } from '@/src/prisma/client';
import { ErrorResponses } from '@/src/lib/api/response';

/**
 * Get all users (admin only)
 */
export async function getAllUsers(limit: number = 50, offset: number = 0) {
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip: offset,
      take: limit,
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        role: true,
        is_active: true,
        is_email_verified: true,
        created_at: true,
      },
      orderBy: { created_at: 'desc' },
    }),
    prisma.user.count(),
  ]);

  return { users, total, limit, offset };
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
      is_active: true,
      is_email_verified: true,
      avatar_url: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!user) {
    throw ErrorResponses.NOT_FOUND('User');
  }

  return user;
}

/**
 * Update user (admin only)
 */
export async function updateUser(
  userId: string,
  data: {
    first_name?: string;
    last_name?: string;
    is_active?: boolean;
  }
) {
  const user = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      role: true,
      is_active: true,
      created_at: true,
    },
  });

  return user;
}

/**
 * Ban user (admin only)
 */
export async function banUser(userId: string) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { is_active: false },
    select: {
      id: true,
      email: true,
      is_active: true,
    },
  });

  return user;
}

/**
 * Unban user (admin only)
 */
export async function unbanUser(userId: string) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { is_active: true },
    select: {
      id: true,
      email: true,
      is_active: true,
    },
  });

  return user;
}

/**
 * Delete user (admin only)
 */
export async function deleteUser(userId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { deleted_at: new Date() },
  });

  return { message: 'User deleted successfully' };
}
