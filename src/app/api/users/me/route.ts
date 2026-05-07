import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAuthHandler } from '@/src/lib/api/middleware';
import { getUserById } from '@/src/services/users';

/**
 * GET /api/users/me - Get current authenticated user's profile
 */
export const GET = withAuthHandler(async (request) => {
  try {
    const auth = request.auth!;
    const user = await getUserById(auth.userId);

    return successResponse(user, 'User profile retrieved successfully');
  } catch (error) {
    console.error('Get user error:', error);

    if (error instanceof Error && error.message.includes('not found')) {
      return errorResponse(ErrorResponses.NOT_FOUND('User'));
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});
