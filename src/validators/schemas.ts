import { z } from 'zod';

// ==================== AUTH VALIDATORS ====================

export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

// ==================== FILM VALIDATORS ====================

export const FilmSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title is too long'),
  description: z.string().optional().nullable(),
  type: z.enum(['trailer', 'full']),
  duration_seconds: z
    .number()
    .positive('Duration must be positive')
    .optional()
    .nullable(),
  thumbnail_url: z.string().url('Invalid thumbnail URL').optional().nullable(),
  video_url: z.string().url('Invalid video URL').optional().nullable(),
  is_published: z.boolean().default(false),
  release_date: z.string().datetime().optional().nullable(),
});

export const UpdateFilmSchema = FilmSchema.partial();

// ==================== SURVEY VALIDATORS ====================

export const SurveySchema = z.object({
  film_id: z.string().cuid('Invalid film ID'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional().nullable(),
  trigger_type: z.enum(['during', 'after']),
  trigger_time_seconds: z.number().positive().optional().nullable(),
  is_active: z.boolean().default(true),
});

export const SurveyQuestionSchema = z.object({
  survey_id: z.string().cuid('Invalid survey ID'),
  question_text: z.string().min(1, 'Question text is required'),
  question_type: z.enum(['text', 'rating', 'choice']),
  order: z.number().nonnegative('Order must be non-negative'),
  is_required: z.boolean().default(true),
  options: z.string().optional().nullable(), // JSON string
});

export const SurveyAnswerSchema = z.object({
  question_id: z.string().cuid('Invalid question ID'),
  label: z.string().min(1, 'Label is required'),
  value: z.string().min(1, 'Value is required'),
  order: z.number().nonnegative('Order must be non-negative').default(0),
});

export const SurveyResponseSchema = z.object({
  survey_id: z.string().cuid('Invalid survey ID'),
  responses: z.array(
    z.object({
      question_id: z.string().cuid('Invalid question ID'),
      answer_id: z.string().cuid('Invalid answer ID').optional().nullable(),
      custom_response: z.string().optional().nullable(),
    })
  ),
});

// ==================== FEEDBACK VALIDATORS ====================

export const FeedbackSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000),
  rating: z
    .number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5')
    .optional()
    .nullable(),
});

// ==================== TYPE EXPORTS ====================

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;

export type FilmInput = z.infer<typeof FilmSchema>;
export type UpdateFilmInput = z.infer<typeof UpdateFilmSchema>;

export type SurveyInput = z.infer<typeof SurveySchema>;
export type SurveyQuestionInput = z.infer<typeof SurveyQuestionSchema>;
export type SurveyAnswerInput = z.infer<typeof SurveyAnswerSchema>;
export type SurveyResponseInput = z.infer<typeof SurveyResponseSchema>;

export type FeedbackInput = z.infer<typeof FeedbackSchema>;

/**
 * Safe parse wrapper with error messages
 */
export function validateSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: boolean; data?: T; error?: string } {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join(', ');
      return { success: false, error: message };
    }
    return { success: false, error: 'Validation failed' };
  }
}
