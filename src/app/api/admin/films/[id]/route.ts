import { NextRequest } from 'next/server';
import {
  successResponse,
  errorResponse,
  ErrorResponses,
} from '@/src/lib/api/response';
import { withAdminHandler } from '@/src/lib/api/middleware';
import {
  getFilmById,
  updateFilm,
  deleteFilm,
  getFilmStats,
} from '@/src/services/films';
import { validateSchema, UpdateFilmSchema } from '@/src/validators/schemas';

/**
 * GET /api/admin/films/[id] - Get film by ID (admin only)
 */
export const GET = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: filmId } = await (context?.params ?? Promise.resolve({ id: '' }));

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
);

/**
 * PATCH /api/admin/films/[id] - Update film (admin only)
 */
export const PATCH = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: filmId } = await (context?.params ?? Promise.resolve({ id: '' }));
      const body = await request.json();

      if (!filmId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('Film ID is required'),
          400
        );
      }

      const validation = validateSchema(UpdateFilmSchema, body);
      if (!validation.success) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR(validation.error!),
          400
        );
      }

      const film = await updateFilm(filmId, validation.data!);

      return successResponse(film, 'Film updated successfully');
    } catch (error) {
      console.error('Update film error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Film'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);

/**
 * DELETE /api/admin/films/[id] - Delete film (admin only)
 */
export const DELETE = withAdminHandler(
  async (request, context?: { params: Promise<{ id: string }> }) => {
    try {
      const { id: filmId } = await (context?.params ?? Promise.resolve({ id: '' }));

      if (!filmId) {
        return errorResponse(
          ErrorResponses.VALIDATION_ERROR('Film ID is required'),
          400
        );
      }

      const result = await deleteFilm(filmId);

      return successResponse(result, 'Film deleted successfully');
    } catch (error) {
      console.error('Delete film error:', error);

      if (error instanceof Error && error.message.includes('not found')) {
        return errorResponse(ErrorResponses.NOT_FOUND('Film'), 404);
      }

      return errorResponse(ErrorResponses.INTERNAL_SERVER_ERROR());
    }
  }
);
