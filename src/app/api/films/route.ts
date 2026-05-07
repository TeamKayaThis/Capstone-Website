import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';

import { getAllFilms, getFilmById } from '@/src/services/films';

/**
 * GET /api/films - Get all published films
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const type = searchParams.get('type') || undefined;
    const published = searchParams.get('published') === 'true';

    const result = await getAllFilms(limit, offset, {
      type: type as any,
      is_published: published || true,
    });

    return successResponse(result, 'Films retrieved successfully');
  } catch (error) {
    console.error('Get films error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
