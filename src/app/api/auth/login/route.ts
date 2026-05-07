import { NextRequest } from 'next/server';
import { successResponse, errorResponse, ErrorResponses } from '@/src/lib/api/response';

import { setAuthCookie } from '@/src/lib/auth/jwt';
import { validateSchema, LoginSchema } from '@/src/validators/schemas';
import { loginUser } from '@/src/services/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateSchema(LoginSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    // Login user
    const result = await loginUser(validation.data!);

    // Set auth cookie
    await setAuthCookie(result.token);

    return successResponse(
      {
        user: result.user,
        token: result.token,
      },
      'Login successful'
    );
  } catch (error) {
    console.error('Login error:', error);

    if (error instanceof Error) {
      if (
        error.message.includes('Invalid') ||
        error.message.includes('credentials')
      ) {
        return errorResponse(ErrorResponses.INVALID_CREDENTIALS());
      }
      return errorResponse(error);
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
