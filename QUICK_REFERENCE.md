# Quick Reference - Key Files

## 📚 Documentation (Read These First)

1. **IMPLEMENTATION_SUMMARY.md** ← START HERE
2. **QUICK_START.md** - 5-minute setup
3. **BACKEND_GUIDE.md** - Comprehensive guide
4. **API_ROUTES.md** - All endpoints

## 🔑 Core Configuration

- **.env.local** - Your credentials (NEVER commit)
- **.env.example** - Template to copy
- **package.json** - Dependencies (already installed)
- **tsconfig.json** - TypeScript config
- **prisma/schema.prisma** - Database schema

## 🔐 Authentication

- **src/lib/auth/jwt.ts** - JWT management
- **src/lib/auth/password.ts** - Password hashing
- **src/services/auth.ts** - Auth business logic

## 🛡️ Security & Validation

- **src/lib/api/response.ts** - API response formatting
- **src/lib/api/middleware.ts** - Auth/admin checks
- **src/validators/schemas.ts** - Zod validation

## 🗄️ Database

- **src/prisma/client.ts** - Prisma client singleton
- **prisma/schema.prisma** - 11 tables definition
- **src/lib/supabase/client.ts** - Supabase setup

## 📡 API Routes

### Auth Routes (5 min each to understand)

```
src/app/api/auth/
├── register/route.ts
├── login/route.ts
├── logout/route.ts
├── forgot-password/route.ts
├── reset-password/route.ts
└── verify-email/route.ts
```

### Public Routes

```
src/app/api/
├── users/me/route.ts
├── films/route.ts
├── films/[id]/route.ts
├── feedback/route.ts
└── health/route.ts
```

### Admin Routes

```
src/app/api/admin/
├── users/route.ts
├── users/[id]/route.ts
├── films/route.ts
├── films/[id]/route.ts
├── feedback/route.ts
└── feedback/[id]/route.ts
```

## 🎨 Admin Dashboard

### Components (in src/components/admin/)

```
├── Sidebar.tsx ─ Mobile-responsive navigation
├── DashboardCard.tsx ─ Stats display
├── DataTable.tsx ─ CRUD with actions
├── LoadingState.tsx ─ Skeleton loading
└── EmptyState.tsx ─ No data messaging
```

### Pages (in src/app/admin/)

```
├── layout.tsx ─ Sidebar + layout
├── page.tsx ─ Dashboard overview
├── users/page.tsx ─ User management
├── films/page.tsx ─ Film management
├── feedback/page.tsx ─ Feedback review
├── surveys/page.tsx ─ Survey management
└── settings/page.tsx ─ Settings
```

## 🔧 Business Logic (Services)

```
src/services/
├── auth.ts ─ registerUser, loginUser, resetPassword, etc.
├── users.ts ─ getAllUsers, getUserById, banUser, etc.
├── films.ts ─ getAllFilms, createFilm, updateFilm, etc.
└── feedback.ts ─ createFeedback, getFeedback, etc.
```

## 📦 Types

```
src/types/models.ts
├── User interface
├── Film interface
├── Survey interface
├── Feedback interface
├── UserFilmProgress interface
└── API response types
```

---

## 🚀 Getting Started Command

```bash
# 1. Edit .env.local with your Supabase credentials
nano .env.local

# 2. Initialize database
npx prisma migrate dev --name init

# 3. Start dev server
npm run dev

# 4. Test health endpoint
curl http://localhost:3000/api/health

# 5. View admin dashboard
# Open http://localhost:3000/admin
```

---

## 📋 Important Commands

### Database

```bash
npx prisma studio              # View database
npx prisma migrate dev --name  # Create migration
npx prisma db push             # Push schema to DB
npx prisma migrate reset       # Reset (dev only)
```

### Development

```bash
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run start                  # Start production server
npm run lint                   # Run ESLint
```

---

## 🔍 Testing Endpoints

### Register

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Password123",
    "first_name":"John",
    "last_name":"Doe"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Password123"
  }'
```

### Get Films

```bash
curl http://localhost:3000/api/films?limit=10
```

### Get User Profile (with token)

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/users/me
```

---

## 🎯 File to Read by Use Case

| I want to...                        | Read this file                     |
| ----------------------------------- | ---------------------------------- |
| Understand the overall architecture | IMPLEMENTATION_SUMMARY.md          |
| Get started quickly                 | QUICK_START.md                     |
| Learn all details                   | BACKEND_GUIDE.md                   |
| See all API endpoints               | API_ROUTES.md                      |
| Understand database                 | prisma/schema.prisma               |
| Add authentication to frontend      | src/services/auth.ts               |
| Create new API route                | Look at existing route handlers    |
| Modify database                     | prisma/schema.prisma + run migrate |
| Add admin features                  | src/app/admin/\*                   |

---

## 🆘 Troubleshooting

**Problem**: Database connection fails

```bash
# Check DATABASE_URL in .env.local
# Verify Supabase credentials
# Test connection: npx prisma db push
```

**Problem**: Prisma Client not found

```bash
npx prisma generate
```

**Problem**: Port 3000 in use

```bash
npm run dev -- -p 3001
```

**Problem**: JWT token invalid

```bash
# Check JWT_SECRET is set
# Ensure header format: Authorization: Bearer {token}
```

---

## 📞 Need Help?

1. Check the appropriate guide (QUICK_START.md, BACKEND_GUIDE.md, etc.)
2. Review API_ROUTES.md for endpoint details
3. Check src/types/models.ts for data structures
4. Look at existing route handlers for patterns
5. Enable debug: NODE_ENV=development npm run dev

---

**Last Updated**: May 7, 2025
**Status**: ✅ Ready to Use
