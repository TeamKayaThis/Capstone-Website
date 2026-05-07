import { NextRequest } from 'next/server';
import { successResponse, errorResponse,ErrorResponses } from '@/src/lib/api/response';

import { verifyEmail } from '@/src/services/auth';


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR('Verification token is required'),
        400
      );
    }

    // Verify email
    const result = await verifyEmail(token);

    return successResponse(result, 'Email verified successfully');
  } catch (error) {
    console.error('Verify email error:', error);

    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return errorResponse(
          ErrorResponses.NOT_FOUND('Verification token'),
          404
        );
      }
      if (
        error.message.includes('expired') ||
        error.message.includes('already')
      ) {
        return errorResponse(new Error(error.message), 400);
      }
      return errorResponse(error);
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
