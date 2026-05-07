import { prisma } from '@/src/prisma/client';
import { ErrorResponses } from '@/src/lib/api/response';
import type { FilmInput, UpdateFilmInput } from '@/src/validators/schemas';

/**
 * Get all films
 */
export async function getAllFilms(
  limit: number = 50,
  offset: number = 0,
  filter?: { type?: string; is_published?: boolean }
) {
  const [films, total] = await Promise.all([
    prisma.film.findMany({
      skip: offset,
      take: limit,
      where: {
        ...(filter?.type && { type: filter.type as any }),
        ...(filter?.is_published !== undefined && {
          is_published: filter.is_published,
        }),
      },
      select: {
        id: true,
        title: true,
        type: true,
        duration_seconds: true,
        thumbnail_url: true,
        is_published: true,
        release_date: true,
        created_at: true,
      },
      orderBy: { created_at: 'desc' },
    }),
    prisma.film.count({
      where: {
        ...(filter?.type && { type: filter.type as any }),
        ...(filter?.is_published !== undefined && {
          is_published: filter.is_published,
        }),
      },
    }),
  ]);

  return { films, total, limit, offset };
}

/**
 * Get film by ID
 */
export async function getFilmById(filmId: string) {
  const film = await prisma.film.findUnique({
    where: { id: filmId },
    include: {
      surveys: true,
      user_progress: {
        select: { user_id: true, percentage_watched: true, completed: true },
      },
    },
  });

  if (!film) {
    throw ErrorResponses.NOT_FOUND('Film');
  }

  return film;
}

/**
 * Create film
 */
export async function createFilm(data: FilmInput) {
  const film = await prisma.film.create({
    data: {
      title: data.title,
      description: data.description,
      type: data.type,
      duration_seconds: data.duration_seconds,
      thumbnail_url: data.thumbnail_url,
      video_url: data.video_url,
      is_published: data.is_published,
      release_date: data.release_date ? new Date(data.release_date) : null,
    },
  });

  return film;
}

/**
 * Update film
 */
export async function updateFilm(filmId: string, data: UpdateFilmInput) {
  const film = await prisma.film.update({
    where: { id: filmId },
    data: {
      ...(data.title && { title: data.title }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.type && { type: data.type }),
      ...(data.duration_seconds && { duration_seconds: data.duration_seconds }),
      ...(data.thumbnail_url !== undefined && {
        thumbnail_url: data.thumbnail_url,
      }),
      ...(data.video_url !== undefined && { video_url: data.video_url }),
      ...(data.is_published !== undefined && {
        is_published: data.is_published,
      }),
      ...(data.release_date && { release_date: new Date(data.release_date) }),
    },
  });

  return film;
}

/**
 * Delete film
 */
export async function deleteFilm(filmId: string) {
  await prisma.film.delete({
    where: { id: filmId },
  });

  return { message: 'Film deleted successfully' };
}

/**
 * Get film statistics
 */
export async function getFilmStats(filmId: string) {
  const film = await getFilmById(filmId);

  const [watchStats, surveyStats] = await Promise.all([
    prisma.userFilmProgress.aggregate({
      where: { film_id: filmId },
      _avg: { percentage_watched: true },
      _count: { user_id: true },
    }),
    prisma.surveyResponse.count({
      where: { survey: { film_id: filmId } },
    }),
  ]);

  return {
    film_id: filmId,
    total_views: watchStats._count.user_id,
    avg_watch_percentage: watchStats._avg.percentage_watched || 0,
    total_survey_responses: surveyStats,
  };
}
