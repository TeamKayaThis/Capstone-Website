import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/src/lib/api/response';
import { clearAuthCookie } from '@/src/lib/auth/jwt';

export async function POST(request: NextRequest) {
  try {
    // Clear auth cookie
    await clearAuthCookie();

    return successResponse(
      { message: 'Logout successful' },
      'Logged out successfully'
    );
  } catch (error) {
    console.error('Logout error:', error);
    return errorResponse(
      error instanceof Error ? error : new Error('Logout failed')
    );
  }
}
