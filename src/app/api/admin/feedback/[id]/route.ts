import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from '@/src/services/feedback';

/**
 * GET /api/admin/feedback/[id] - Get feedback by ID (admin only)
 */
export const GET = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: feedbackId } = await (context?.params ?? Promise.resolve({ id: '' }));

      if (!feedbackId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('Feedback ID is required'),
          400
        );
      }

      const feedback = await getFeedbackById(feedbackId);

      return successResponse(feedback, 'Feedback retrieved successfully');
    } catch (error) {
      console.error('Get feedback error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Feedback'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);

/**
 * PATCH /api/admin/feedback/[id] - Update feedback (admin only)
 */
export const PATCH = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: feedbackId } = await (context?.params ?? Promise.resolve({ id: '' }));
      const body = await request.json();

      if (!feedbackId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('Feedback ID is required'),
          400
        );
      }

      const feedback = await updateFeedback(feedbackId, body);

      return successResponse(feedback, 'Feedback updated successfully');
    } catch (error) {
      console.error('Update feedback error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Feedback'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);

/**
 * DELETE /api/admin/feedback/[id] - Delete feedback (admin only)
 */
export const DELETE = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: feedbackId } = await (context?.params ?? Promise.resolve({ id: '' }));

      if (!feedbackId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('Feedback ID is required'),
          400
        );
      }

      const result = await deleteFeedback(feedbackId);

      return successResponse(result, 'Feedback deleted successfully');
    } catch (error) {
      console.error('Delete feedback error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Feedback'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);
