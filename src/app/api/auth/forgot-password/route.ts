import { NextRequest } from 'next/server';


import { successResponse, errorResponse, ErrorResponses } from '@/src/lib/api/response';


import { validateSchema, ForgotPasswordSchema } from '@/src/validators/schemas';

import { requestPasswordReset } from '@/src/services/auth';




export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateSchema(ForgotPasswordSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    // Request password reset
    const result = await requestPasswordReset(validation.data!);

    // Always return success for security (don't reveal if user exists)
    return successResponse(
      result,
      'Password reset instructions sent if user exists'
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
