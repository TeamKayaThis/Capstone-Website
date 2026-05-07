import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getAllUsers,
  getUserById,
  updateUser,
  banUser,
  unbanUser,
  deleteUser,
} from '@/src/services/users';

/**
 * GET /api/admin/users - Get all users (admin only)
 */
export const GET = withAdminHandler(async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');

    const result = await getAllUsers(limit, offset);

    return successResponse(result, 'Users retrieved successfully');
  } catch (error) {
    console.error('Get users error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});
