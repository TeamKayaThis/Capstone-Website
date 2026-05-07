import { NextRequest, NextResponse } from 'next/server';
import { extractTokenFromHeader } from '../auth/jwt';
import { verifyToken } from '../auth/jwt';
import { ErrorResponses, errorResponse } from './response';

export interface AuthenticatedRequest extends NextRequest {
  auth?: {
    userId: string;
    email: string;
    role: 'user' | 'admin';
  };
}

/**
 * Middleware to verify authentication
 */
export async function withAuth(
  request: NextRequest
): Promise<NextResponse | null> {
  const authHeader = request.headers.get('authorization');
  const token = extractTokenFromHeader(authHeader ?? undefined);

  if (!token) {
    return errorResponse(ErrorResponses.UNAUTHORIZED());
  }

  const payload = verifyToken(token);

  if (!payload) {
    return errorResponse(ErrorResponses.INVALID_TOKEN());
  }

  // Attach auth info to request
  (request as AuthenticatedRequest).auth = {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  };

  return null;
}

/**
 * Middleware to verify admin access
 */
export async function withAdmin(
  request: NextRequest
): Promise<NextResponse | null> {
  const authError = await withAuth(request);
  if (authError) {
    return authError;
  }

  const auth = (request as AuthenticatedRequest).auth;

  if (auth?.role !== 'admin') {
    return errorResponse(ErrorResponses.FORBIDDEN());
  }

  return null;
}

/**
 * Wrapper for route handlers with auth
 */
export function withAuthHandler(
  handler: (request: AuthenticatedRequest, context?: { params: Promise<any> }) => Promise<NextResponse>
) {
  return async (request: NextRequest, context?: { params: Promise<any> }): Promise<NextResponse> => {
    const authError = await withAuth(request);
    if (authError) return authError;

    try {
      return await handler(request as AuthenticatedRequest, context);
    } catch (error) {
      console.error('Route handler error:', error);
      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  };
}

/**
 * Wrapper for route handlers with admin access
 */
export function withAdminHandler(
  handler: (request: AuthenticatedRequest, context?: { params: Promise<any> }) => Promise<NextResponse>
) {
  return async (request: NextRequest, context?: { params: Promise<any> }): Promise<NextResponse> => {
    const adminError = await withAdmin(request);
    if (adminError) return adminError;

    try {
      return await handler(request as AuthenticatedRequest, context);
    } catch (error) {
      console.error('Route handler error:', error);
      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  };
}
