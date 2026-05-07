# Beyond the Shake - Backend Implementation Guide

## 🎯 Project Overview

This document outlines the production-grade backend implementation for "Beyond the Shake," a web-based film distribution and epilepsy awareness platform.

**Tech Stack:**

- Next.js 16 (App Router)
- Supabase PostgreSQL
- Prisma ORM
- TypeScript
- Zod Validation
- JWT + Secure Cookies

---

## 📋 Table of Contents

1. [Architecture](#architecture)
2. [Database Setup](#database-setup)
3. [Environment Configuration](#environment-configuration)
4. [API Documentation](#api-documentation)
5. [Authentication](#authentication)
6. [Admin Dashboard](#admin-dashboard)
7. [Development Workflow](#development-workflow)
8. [Production Deployment](#production-deployment)

---

## 🏗️ Architecture

### Folder Structure

```
src/
├── app/
│   ├── api/                    # Route handlers
│   │   ├── auth/              # Auth endpoints
│   │   ├── users/             # User endpoints
│   │   ├── films/             # Film endpoints
│   │   ├── feedback/          # Feedback endpoints
│   │   └── admin/             # Admin-only endpoints
│   ├── admin/                 # Admin dashboard pages
│   ├── (auth)/               # Auth pages
│   └── layout.tsx
│
├── components/
│   ├── admin/                 # Admin dashboard components
│   └── [existing]/           # Your current components
│
├── lib/
│   ├── auth/                 # JWT, password, cookies
│   ├── api/                  # Response helpers, middleware
│   ├── supabase/             # Supabase clients
│   └── utils/                # Utility functions
│
├── services/                 # Business logic
├── validators/               # Zod schemas
├── middleware/               # Auth middleware
├── types/                    # TypeScript types
└── prisma/                   # Prisma client
```

### Design Patterns

1. **Separation of Concerns**: API routes → Services → Database
2. **Middleware Pattern**: Reusable auth & admin checks
3. **Error Handling**: Centralized error responses
4. **Validation**: Runtime validation with Zod
5. **Type Safety**: Full TypeScript coverage

---

## 🗄️ Database Setup

### Prerequisites

1. **Supabase Account**: Create at [supabase.com](https://supabase.com)
2. **Database Created**: Use default PostgreSQL instance
3. **Credentials**: Collect project URL and API keys

### Prisma Migrations

```bash
# 1. Set DATABASE_URL in .env.local
DATABASE_URL="postgresql://user:password@host:5432/db"

# 2. Generate Prisma Client
npx prisma generate

# 3. Create migrations
npx prisma migrate dev --name init

# 4. Seed database (optional)
npx prisma db seed
```

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/beyond-the-shake"

# Supabase
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Auth
JWT_SECRET="your-secret-key-min-32-chars"
JWT_EXPIRY="24h"

# API
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"

# Environment
NODE_ENV="development"
```

---

## 🔐 Authentication System

### Auth Flow

```
1. User registers → Hashed password stored → JWT generated
2. User logs in → Password verified → JWT + Secure cookie set
3. Each API request → JWT extracted from header/cookie → Verified
4. Token expires → User must re-login
```

### Auth Endpoints

**POST /api/auth/register**

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "first_name": "John",
  "last_name": "Doe"
}
```

**POST /api/auth/login**

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**POST /api/auth/logout**

- Clears auth cookie

**POST /api/auth/forgot-password**

```json
{
  "email": "user@example.com"
}
```

**POST /api/auth/reset-password**

```json
{
  "token": "reset-token",
  "password": "NewPassword123"
}
```

**POST /api/auth/verify-email**

```json
{
  "token": "verification-token"
}
```

---

## 📊 API Documentation

### Public Endpoints

**GET /api/films**

- Returns published films
- Query params: `limit`, `offset`, `type`, `published`

**GET /api/films/[id]**

- Get single film details

**GET /api/users/me**

- Get authenticated user profile
- Requires: JWT token

**POST /api/feedback**

- Submit user feedback
- Requires: JWT token

---

### Admin Endpoints

**GET /api/admin/users**

- List all users (admin only)

**GET /api/admin/users/[id]**

- Get user details

**PATCH /api/admin/users/[id]**

- Update user info

**POST /api/admin/users/[id]?action=ban|unban|delete**

- Manage user account

**GET /api/admin/films**

- List all films

**POST /api/admin/films**

- Create new film

**PATCH /api/admin/films/[id]**

- Update film details

**DELETE /api/admin/films/[id]**

- Delete film

**GET /api/admin/feedback**

- List all feedback

**PATCH /api/admin/feedback/[id]**

- Update feedback (resolve, add response)

**DELETE /api/admin/feedback/[id]**

- Delete feedback

---

## 🛡️ Security Features

✅ **Password Security**

- Hashed with bcrypt (10 salt rounds)
- Minimum 8 characters, uppercase, lowercase, number required

✅ **Token Security**

- JWT signed with HS256
- 24-hour expiration
- HttpOnly, Secure, SameSite cookies

✅ **Admin Authorization**

- Role-based access control
- Middleware validation on protected routes

✅ **Input Validation**

- Zod schemas on all endpoints
- Email format validation
- Type checking

✅ **Error Handling**

- No sensitive info in error messages
- Consistent error format
- Proper HTTP status codes

---

## 🎨 Admin Dashboard

### Pages

- `/admin` - Dashboard overview with stats
- `/admin/users` - User management
- `/admin/films` - Film management
- `/admin/surveys` - Survey management
- `/admin/feedback` - Feedback review
- `/admin/content` - Media management
- `/admin/settings` - Platform settings

### Components

- **Sidebar**: Mobile-responsive navigation
- **DashboardCard**: Statistics display
- **DataTable**: CRUD operations with actions
- **LoadingState**: Skeleton loading
- **EmptyState**: No data messaging

### Design System

- Matches existing frontend styling
- Brand colors: dark (#1a1a1a), muted (#808080), light (#f9f9f9)
- Serif headings, sans-serif body
- Responsive grid system
- Mobile-first approach

---

## 🚀 Development Workflow

### 1. Setup

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Update .env.local with your Supabase credentials

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init
```

### 2. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 3. API Testing

Use Postman/Insomnia with:

- Base URL: `http://localhost:3000/api`
- Auth header: `Authorization: Bearer {token}`

### 4. Database Management

```bash
# View database UI
npx prisma studio

# Create new migration
npx prisma migrate dev --name feature-name

# Reset database (dev only)
npx prisma migrate reset
```

---

## 🔌 Connecting Frontend to APIs

### Using Axios with Auth

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Auth Hook

```typescript
import { useState, useEffect } from 'react';
import api from '@/lib/api/client';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get('/users/me')
      .then((res) => setUser(res.data.data))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('auth_token', res.data.data.token);
    setUser(res.data.data.user);
    return res.data.data;
  };

  const logout = async () => {
    await api.post('/auth/logout');
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  return { user, isLoading, login, logout };
}
```

---

## 📦 Production Deployment

### Pre-deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Prisma schema validated
- [ ] All tests passing
- [ ] CORS configured
- [ ] Rate limiting enabled
- [ ] Logging configured
- [ ] Error tracking setup (e.g., Sentry)

### Vercel Deployment

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set environment variables in Vercel dashboard
# 4. Redeploy
vercel --prod
```

### Database Backups

1. Enable Supabase automated backups
2. Export database regularly
3. Test restore procedures

---

## 📚 Additional Resources

- [Prisma Docs](https://www.prisma.io/docs/)
- [Supabase Docs](https://supabase.com/docs)
- [JWT Best Practices](https://tools.ietf.org/html/rfc7519)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Zod Validation](https://zod.dev/)

---

## 🐛 Troubleshooting

### Database Connection Error

```bash
# Verify DATABASE_URL is correct
# Check Supabase credentials
# Ensure database is running
npx prisma db push
```

### JWT Token Invalid

- Verify JWT_SECRET is set and consistent
- Check token expiration
- Ensure Authorization header format: `Bearer {token}`

### Migration Conflicts

```bash
# Reset migrations (dev only)
npx prisma migrate reset
```

---

## 📞 Support

For issues or questions:

1. Check environment variables
2. Review database schema
3. Check Supabase logs
4. Test endpoints with Postman
5. Review application logs

---

**Last Updated**: May 2025
**Version**: 1.0.0
