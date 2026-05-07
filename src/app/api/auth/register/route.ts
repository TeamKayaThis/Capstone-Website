import { NextRequest } from 'next/server';
import { successResponse,errorResponse,ErrorResponses } from '@/src/lib/api/response';
import { setAuthCookie } from '@/src/lib/auth/jwt';
import { validateSchema, RegisterSchema } from '@/src/validators/schemas';
import { registerUser } from '@/src/services/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateSchema(RegisterSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    // Register user
    const result = await registerUser(validation.data!);

    // Set auth cookie
    await setAuthCookie(result.token);

    return successResponse(
      {
        user: result.user,
        token: result.token,
      },
      'User registered successfully',
      201
    );
  } catch (error) {
    console.error('Register error:', error);

    if (error instanceof Error) {
      if (error.message.includes('already exists')) {
        return errorResponse(
          ErrorResponses.ALREADY_EXISTS('User with this email'),
          409
        );
      }
      return errorResponse(error);
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
