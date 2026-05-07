import { NextRequest } from 'next/server';

import { successResponse,errorResponse,ErrorResponses } from '@/src/lib/api/response';

import { validateSchema, FeedbackSchema } from '@/src/validators/schemas';

import { withAuthHandler } from '@/src/lib/api/middleware';

import { createFeedback,getAllFeedback } from '@/src/services/feedback';


/**
 * GET /api/feedback - Get all feedback (user can only see their own in production)
 */
export const GET = withAuthHandler(async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');

    const result = await getAllFeedback(limit, offset);

    return successResponse(result, 'Feedback retrieved successfully');
  } catch (error) {
    console.error('Get feedback error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});

/**
 * POST /api/feedback - Create feedback
 */
export const POST = withAuthHandler(async (request) => {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateSchema(FeedbackSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    const auth = request.auth!;
    const feedback = await createFeedback(auth.userId, validation.data!);

    return successResponse(feedback, 'Feedback submitted successfully', 201);
  } catch (error) {
    console.error('Create feedback error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});
