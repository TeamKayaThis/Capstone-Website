import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
  getFeedbackStats,
} from '@/src/services/feedback';

/**
 * GET /api/admin/feedback - Get all feedback (admin only)
 */
export const GET = withAdminHandler(async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const isResolved =
      searchParams.get('is_resolved') === 'true' ? true : undefined;

    const result = await getAllFeedback(limit, offset, {
      is_resolved: isResolved,
    });

    return successResponse(result, 'Feedback retrieved successfully');
  } catch (error) {
    console.error('Get feedback error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});
