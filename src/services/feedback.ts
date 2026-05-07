import { prisma } from '@/src/prisma/client';
import { ErrorResponses } from '@/src/lib/api/response';
import type { FeedbackInput } from '@/src/validators/schemas';

/**
 * Get all feedback
 */
export async function getAllFeedback(
  limit: number = 50,
  offset: number = 0,
  filter?: { is_resolved?: boolean }
) {
  const [feedback, total] = await Promise.all([
    prisma.feedback.findMany({
      skip: offset,
      take: limit,
      where: {
        ...(filter?.is_resolved !== undefined && {
          is_resolved: filter.is_resolved,
        }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
    }),
    prisma.feedback.count({
      where: {
        ...(filter?.is_resolved !== undefined && {
          is_resolved: filter.is_resolved,
        }),
      },
    }),
  ]);

  return { feedback, total, limit, offset };
}

/**
 * Get feedback by ID
 */
export async function getFeedbackById(feedbackId: string) {
  const feedback = await prisma.feedback.findUnique({
    where: { id: feedbackId },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
        },
      },
    },
  });

  if (!feedback) {
    throw ErrorResponses.NOT_FOUND('Feedback');
  }

  return feedback;
}

/**
 * Create feedback (user)
 */
export async function createFeedback(userId: string, data: FeedbackInput) {
  const feedback = await prisma.feedback.create({
    data: {
      user_id: userId,
      title: data.title,
      message: data.message,
      rating: data.rating,
      is_resolved: false,
    },
  });

  return feedback;
}

/**
 * Update feedback (admin)
 */
export async function updateFeedback(
  feedbackId: string,
  data: {
    is_resolved?: boolean;
    admin_response?: string;
  }
) {
  const feedback = await prisma.feedback.update({
    where: { id: feedbackId },
    data,
    include: {
      user: {
        select: {
          email: true,
          first_name: true,
        },
      },
    },
  });

  return feedback;
}

/**
 * Delete feedback
 */
export async function deleteFeedback(feedbackId: string) {
  await prisma.feedback.delete({
    where: { id: feedbackId },
  });

  return { message: 'Feedback deleted successfully' };
}

/**
 * Get feedback statistics
 */
export async function getFeedbackStats() {
  const [total, resolved, avgRating] = await Promise.all([
    prisma.feedback.count(),
    prisma.feedback.count({ where: { is_resolved: true } }),
    prisma.feedback.aggregate({
      _avg: { rating: true },
      where: { rating: { not: null } },
    }),
  ]);

  return {
    total,
    resolved,
    pending: total - resolved,
    avg_rating: avgRating._avg.rating || 0,
  };
}
