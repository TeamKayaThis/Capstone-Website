# API Routes Reference

## Authentication Routes

### POST /api/auth/register

Register a new user

```
Body: {
  email: string (email)
  password: string (min 8 chars, uppercase, lowercase, number)
  first_name: string (min 2 chars)
  last_name: string (min 2 chars)
}

Response: {
  user: { id, email, first_name, last_name, role }
  token: string
}
```

### POST /api/auth/login

Login user

```
Body: {
  email: string (email)
  password: string
}

Response: {
  user: { id, email, first_name, last_name, role, is_email_verified }
  token: string
}
```

### POST /api/auth/logout

Logout (clear cookie)

```
Response: { message: "Logout successful" }
```

### POST /api/auth/forgot-password

Request password reset

```
Body: {
  email: string (email)
}

Response: { message: "..." }
```

### POST /api/auth/reset-password

Reset password with token

```
Body: {
  token: string
  password: string (min 8 chars, uppercase, lowercase, number)
}

Response: { message: "Password reset successful" }
```

### POST /api/auth/verify-email

Verify email with token

```
Body: {
  token: string
}

Response: { message: "Email verified successfully" }
```

---

## User Routes

### GET /api/users/me

Get authenticated user profile (requires JWT)

```
Headers: Authorization: Bearer {token}

Response: {
  id, email, first_name, last_name, role, is_email_verified, avatar_url, created_at
}
```

---

## Film Routes

### GET /api/films

Get published films

```
Query Params:
  ?limit=50&offset=0&type=trailer|full&published=true

Response: {
  films: [{ id, title, type, duration_seconds, thumbnail_url, is_published, created_at }],
  total: number,
  limit: number,
  offset: number
}
```

### GET /api/films/[id]

Get film details

```
Response: {
  id, title, description, type, duration_seconds, thumbnail_url, video_url, is_published, release_date
}
```

---

## Feedback Routes

### GET /api/feedback

Get all feedback (requires JWT)

```
Headers: Authorization: Bearer {token}
Query Params: ?limit=50&offset=0

Response: {
  feedback: [...],
  total: number
}
```

### POST /api/feedback

Submit feedback (requires JWT)

```
Headers: Authorization: Bearer {token}

Body: {
  title: string (required)
  message: string (min 10 chars)
  rating: number (1-5, optional)
}

Response: { id, user_id, title, message, rating, is_resolved, created_at }
```

---

## Admin Routes (Requires admin role)

### GET /api/admin/users

Get all users (admin only)

```
Headers: Authorization: Bearer {admin-token}
Query Params: ?limit=50&offset=0

Response: {
  users: [...],
  total: number
}
```

### GET /api/admin/users/[id]

Get user details (admin only)

```
Response: { id, email, first_name, last_name, role, is_active, is_email_verified, created_at }
```

### PATCH /api/admin/users/[id]

Update user (admin only)

```
Body: {
  first_name?: string
  last_name?: string
  is_active?: boolean
}

Response: { id, email, first_name, last_name, role, is_active }
```

### POST /api/admin/users/[id]?action=ban|unban|delete

Manage user (admin only)

```
Response: { id, email, is_active } or { message }
```

### GET /api/admin/films

Get all films (admin only)

```
Query Params: ?limit=50&offset=0&type=trailer|full

Response: {
  films: [...],
  total: number
}
```

### POST /api/admin/films

Create film (admin only)

```
Body: {
  title: string (required)
  description?: string
  type: "trailer" | "full" (required)
  duration_seconds?: number
  thumbnail_url?: string
  video_url?: string
  is_published?: boolean (default: false)
  release_date?: ISO date string
}

Response: { id, title, type, ... }
```

### GET /api/admin/films/[id]

Get film details (admin only)

```
Response: { id, title, type, duration_seconds, ... }
```

### PATCH /api/admin/films/[id]

Update film (admin only)

```
Body: { title?, description?, type?, duration_seconds?, ... }

Response: { id, title, ... }
```

### DELETE /api/admin/films/[id]

Delete film (admin only)

```
Response: { message: "Film deleted successfully" }
```

### GET /api/admin/feedback

Get all feedback (admin only)

```
Query Params: ?limit=50&offset=0&is_resolved=true|false

Response: {
  feedback: [...],
  total: number
}
```

### GET /api/admin/feedback/[id]

Get feedback details (admin only)

```
Response: { id, title, message, rating, is_resolved, admin_response, user: {...} }
```

### PATCH /api/admin/feedback/[id]

Update feedback (admin only)

```
Body: {
  is_resolved?: boolean
  admin_response?: string
}

Response: { id, is_resolved, admin_response, ... }
```

### DELETE /api/admin/feedback/[id]

Delete feedback (admin only)

```
Response: { message: "Feedback deleted successfully" }
```

---

## Health Check

### GET /api/health

Health check endpoint

```
Response: {
  status: "ok",
  timestamp: "2025-05-07T12:00:00.000Z",
  version: "1.0.0"
}
```

---

## Error Response Format

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2025-05-07T12:00:00.000Z"
}
```

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad request / Validation error
- `401` - Unauthorized / Invalid token
- `403` - Forbidden / Admin required
- `404` - Not found
- `409` - Conflict / Resource already exists
- `500` - Server error

---

## Authentication

All protected endpoints require the `Authorization` header:

```
Authorization: Bearer {jwt_token}
```

The token is also stored in an `HttpOnly` cookie automatically on login.

---

Last Updated: May 7, 2025
