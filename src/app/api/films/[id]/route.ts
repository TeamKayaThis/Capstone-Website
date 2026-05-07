import { NextRequest } from 'next/server';

import { successResponse, errorResponse, ErrorResponses } from '@/src/lib/api/response';

import { getFilmById, getFilmStats } from '@/src/services/films';


/**
 * GET /api/films/[id] - Get film by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: filmId } = await params;

    if (!filmId) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR('Film ID is required'),
        400
      );
    }

    const film = await getFilmById(filmId);

    return successResponse(film, 'Film retrieved successfully');
  } catch (error) {
    console.error('Get film error:', error);

    if (error instanceof Error && error.message.includes('not found')) {
      return errorResponse(ErrorResponses.NOT_FOUND('Film'), 404);
    }

    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
}
