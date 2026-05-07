import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getUserById,
  updateUser,
  banUser,
  unbanUser,
  deleteUser,
} from '@/src/services/users';

/**
 * GET /api/admin/users/[id] - Get user by ID (admin only)
 */
export const GET = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: userId } = await (context?.params ?? Promise.resolve({ id: '' }));

      if (!userId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('User ID is required'),
          400
        );
      }

      const user = await getUserById(userId);

      return successResponse(user, 'User retrieved successfully');
    } catch (error) {
      console.error('Get user error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('User'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);

/**
 * PATCH /api/admin/users/[id] - Update user (admin only)
 */
export const PATCH = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: userId } = await (context?.params ?? Promise.resolve({ id: '' }));
      const body = await request.json();

      if (!userId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('User ID is required'),
          400
        );
      }

      const user = await updateUser(userId, body);

      return successResponse(user, 'User updated successfully');
    } catch (error) {
      console.error('Update user error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('User'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);

/**
 * POST /api/admin/users/[id]/ban - Ban user (admin only)
 */
export async function POST(
  request: NextRequest,
  context?: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await (context?.params ?? Promise.resolve({ id: '' }));
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (!userId) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR('User ID is required'),
        400
      );
    }

    let result;

    if (action === 'ban') {
      result = await banUser(userId);
    } else if (action === 'unban') {
      result = await unbanUser(userId);
    } else if (action === 'delete') {
      result = await deleteUser(userId);
    } else {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(
          'Invalid action. Use: ban, unban, delete'
        ),
        400
      );
    }

    return successResponse(result, `User ${action} successful`);
  } catch (error) {
    console.error('Ban user error:', error);

    if (error instanceof Error && error.message.includes('not found')) {
      return errorResponse(ErrorResponses.NOT_FOUND('User'), 404);
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
