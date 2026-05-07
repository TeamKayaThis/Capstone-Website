import { NextRequest } from 'next/server';
import { successResponse,errorResponse,ErrorResponses } from '@/src/lib/api/response';

import { validateSchema, ResetPasswordSchema } from '@/src/validators/schemas';

import { resetPassword } from '@/src/services/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateSchema(ResetPasswordSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    // Reset password
    const result = await resetPassword(validation.data!);

    return successResponse(result, 'Password reset successful');
  } catch (error) {
    console.error('Reset password error:', error);

    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Reset token'), 404);
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
