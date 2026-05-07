# Quick Start Guide - Beyond the Shake Backend

## 🚀 Getting Started (5 minutes)

### Step 1: Setup Supabase

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project (PostgreSQL)
3. Copy these credentials:
   - Project URL → `SUPABASE_URL`
   - Anon Key → `SUPABASE_ANON_KEY`
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`

### Step 2: Configure Environment

```bash
# Edit .env.local
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://postgres:password@db.xxxx.supabase.co:5432/postgres
JWT_SECRET=your-secret-min-32-chars-long-1234567890
```

### Step 3: Initialize Database

```bash
# Install Prisma
npm install

# Generate Prisma Client
npx prisma generate

# Create database schema
npx prisma migrate dev --name init

# View database (optional)
npx prisma studio
```

### Step 4: Start Development Server

```bash
npm run dev
```

Access at `http://localhost:3000`

---

## ✅ Verify Setup

### Test Health Endpoint

```bash
curl http://localhost:3000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "timestamp": "2025-05-07T12:00:00.000Z",
  "version": "1.0.0"
}
```

### Test Registration

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password123",
    "first_name": "John",
    "last_name": "Doe"
  }'
```

### Test Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password123"
  }'
```

---

## 📊 Access Admin Dashboard

1. Navigate to `http://localhost:3000/admin`
2. Dashboard shows demo data
3. See Users, Films, Feedback management

---

## 🔑 Key Files to Know

- **`.env.local`** - Environment variables (NEVER commit)
- **`prisma/schema.prisma`** - Database schema
- **`src/lib/auth/`** - Authentication utilities
- **`src/services/`** - Business logic
- **`src/app/api/`** - API route handlers
- **`BACKEND_GUIDE.md`** - Full documentation

---

## 🎯 Next Steps

### 1. Connect Frontend

Update your auth forms to use the API:

```typescript
import api from '@/lib/api/client';

// In LoginForm.tsx
const handleLogin = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  localStorage.setItem('auth_token', res.data.data.token);
};
```

### 2. Create Admin User

```bash
# Use Prisma Studio or manually insert
npx prisma studio

# Then create a user and update role to "admin"
```

### 3. Test API Endpoints

Use Postman/Insomnia to test all endpoints documented in `BACKEND_GUIDE.md`

### 4. Deploy to Production

See "Production Deployment" section in `BACKEND_GUIDE.md`

---

## ⚠️ Common Issues

| Issue                        | Solution                                     |
| ---------------------------- | -------------------------------------------- |
| `DATABASE_URL not set`       | Add to `.env.local`                          |
| `Prisma Client not found`    | Run `npx prisma generate`                    |
| `Database connection failed` | Check Supabase credentials                   |
| `JWT_SECRET too short`       | Use at least 32 characters                   |
| `Port 3000 in use`           | Kill process or use `npm run dev -- -p 3001` |

---

## 📞 Need Help?

1. Check `BACKEND_GUIDE.md` for detailed documentation
2. Review `src/types/models.ts` for data structures
3. Check Supabase dashboard for database issues
4. Enable debug logs: `NODE_ENV=development npm run dev`

---

**You're all set! 🎉**

Start building with:

```bash
npm run dev
```

Then test the APIs at `http://localhost:3000/api/*`

---

Last Updated: May 7, 2025
