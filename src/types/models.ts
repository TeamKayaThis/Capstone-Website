export interface User {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: 'user' | 'admin';
  is_active: boolean;
  is_email_verified: boolean;
  avatar_url: string | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Film {
  id: string;
  title: string;
  description: string | null;
  type: 'trailer' | 'full';
  duration_seconds: number | null;
  thumbnail_url: string | null;
  video_url: string | null;
  video_storage_key: string | null;
  is_published: boolean;
  release_date: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface Survey {
  id: string;
  film_id: string;
  title: string;
  description: string | null;
  trigger_type: 'during' | 'after';
  trigger_time_seconds: number | null;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Feedback {
  id: string;
  user_id: string;
  title: string;
  message: string;
  rating: number | null;
  is_resolved: boolean;
  admin_response: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface UserFilmProgress {
  id: string;
  user_id: string;
  film_id: string;
  seconds_watched: number;
  percentage_watched: number;
  completed: boolean;
  started_at: Date;
  last_watched_at: Date;
  completed_at: Date | null;
}

// API Response Types
export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  code: string;
  timestamp: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
