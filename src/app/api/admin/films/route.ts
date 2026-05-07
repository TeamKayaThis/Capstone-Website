import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getAllFilms,
  createFilm,
  getFilmById,
  updateFilm,
  deleteFilm,
  getFilmStats,
} from '@/src/services/films';
import {
  validateSchema,
  FilmSchema,
  UpdateFilmSchema,
} from '@/src/validators/schemas';

/**
 * GET /api/admin/films - Get all films (admin only)
 */
export const GET = withAdminHandler(async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const type = searchParams.get('type');

    const result = await getAllFilms(limit, offset, {
      type: type as any,
      is_published: undefined,
    });

    return successResponse(result, 'Films retrieved successfully');
  } catch (error) {
    console.error('Get films error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});

/**
 * POST /api/admin/films - Create film (admin only)
 */
export const POST = withAdminHandler(async (request) => {
  try {
    const body = await request.json();

    const validation = validateSchema(FilmSchema, body);
    if (!validation.success) {
      return errorResponse(
        ErrorResponses.VALIDATION_ERROR(validation.error!),
        400
      );
    }

    const film = await createFilm(validation.data!);

    return successResponse(film, 'Film created successfully', 201);
  } catch (error) {
    console.error('Create film error:', error);
    return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
  }
});
