import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: string;
  timestamp?: string;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Send a successful API response
 */
export function successResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message: message || 'Success',
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

/**
 * Send an error API response
 */
export function errorResponse(
  error: ApiError | Error,
  status?: number
): NextResponse<ApiResponse> {
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
      },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: error.message || 'Internal Server Error',
      code: 'INTERNAL_SERVER_ERROR',
      timestamp: new Date().toISOString(),
    },
    { status: status || 500 }
  );
}

/**
 * Predefined error responses
 */
export const ErrorResponses = {
  // Auth errors
  UNAUTHORIZED: () => new ApiError(401, 'UNAUTHORIZED', 'Unauthorized access'),
  FORBIDDEN: () => new ApiError(403, 'FORBIDDEN', 'Forbidden access'),
  INVALID_CREDENTIALS: () =>
    new ApiError(401, 'INVALID_CREDENTIALS', 'Invalid email or password'),
  TOKEN_EXPIRED: () => new ApiError(401, 'TOKEN_EXPIRED', 'Token has expired'),
  INVALID_TOKEN: () =>
    new ApiError(401, 'INVALID_TOKEN', 'Invalid or malformed token'),

  // Validation errors
  VALIDATION_ERROR: (message: string) =>
    new ApiError(400, 'VALIDATION_ERROR', message),
  MISSING_REQUIRED_FIELD: (field: string) =>
    new ApiError(
      400,
      'MISSING_REQUIRED_FIELD',
      `Missing required field: ${field}`
    ),

  // Resource errors
  NOT_FOUND: (resource: string) =>
    new ApiError(404, 'NOT_FOUND', `${resource} not found`),
  ALREADY_EXISTS: (resource: string) =>
    new ApiError(409, 'ALREADY_EXISTS', `${resource} already exists`),

  // Server errors
  INTERNAL_SERVER_ERROR: () =>
    new ApiError(500, 'INTERNAL_SERVER_ERROR', 'Internal server error'),
  DATABASE_ERROR: () =>
    new ApiError(500, 'DATABASE_ERROR', 'Database operation failed'),
};
