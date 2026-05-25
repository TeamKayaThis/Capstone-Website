'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  Users,
  Sparkles,
  Search,
  ShieldCheck,
  MailCheck,
  MailX,
  UserX,
  Eye,
  Pencil,
  Trash2,
  Plus,
  ArrowUpRight,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';
import EmptyState from '@/src/components/admin/EmptyState';

interface User {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  is_active: boolean;
  is_email_verified: boolean;
  created_at: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const demoUsers: User[] = [
      {
        id: '1',
        email: 'john@example.com',
        first_name: 'John',
        last_name: 'Doe',
        role: 'user',
        is_active: true,
        is_email_verified: true,
        created_at: '2025-05-10',
      },
      {
        id: '2',
        email: 'jane@example.com',
        first_name: 'Jane',
        last_name: 'Smith',
        role: 'admin',
        is_active: false,
        is_email_verified: false,
        created_at: '2025-05-18',
      },
    ];

    setTimeout(() => {
      setUsers(demoUsers);
      setIsLoading(false);
    }, 1200);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      `${u.email} ${u.first_name} ${u.last_name} ${u.role}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  const activeUsers = users.filter((u) => u.is_active).length;

  const verifiedUsers = users.filter((u) => u.is_email_verified).length;

  const handleBanUser = async (user: User) => {
    console.log('Ban user:', user.id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles size={15} className="text-pink-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                User Management
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Users
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Manage platform users, roles, verification status, and account activity.
            </p>
          </div>

          <button className="
            inline-flex items-center justify-center gap-2
            rounded-2xl
            bg-white
            px-5 py-3
            text-sm font-medium text-black
            transition-all duration-300
            hover:scale-[1.03]
          ">
            <Plus size={18} />
            Add User
          </button>
        </div>

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="
          relative overflow-hidden
          rounded-[36px]
          border border-white/10
          bg-gradient-to-br
          from-zinc-900 via-black to-zinc-950
          p-8
          shadow-[0_0_80px_rgba(255,255,255,0.03)]
        ">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                PLATFORM AUDIENCE
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Manage Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}Community
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Monitor user activity, verify accounts, manage roles, and maintain platform safety.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="
                  inline-flex items-center gap-2
                  rounded-2xl
                  bg-white
                  px-5 py-3
                  text-sm font-medium text-black
                  hover:scale-[1.03]
                  transition
                ">
                  View Analytics
                  <ArrowUpRight size={16} />
                </button>

                <button className="
                  inline-flex items-center gap-2
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-5 py-3
                  text-sm text-white
                  hover:bg-white/10
                ">
                  Export Users
                </button>

              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <Users size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Total Users</p>
                    <h3 className="font-semibold text-white">{users.length}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <UserX size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Active</p>
                    <h3 className="font-semibold text-emerald-400">{activeUsers}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <MailCheck size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Verified</p>
                    <h3 className="font-semibold text-sky-400">{verifiedUsers}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <ShieldCheck size={20} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Security</p>
                    <h3 className="font-semibold text-violet-400">High</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TABLE */}
        {/* ================================================= */}

        <section className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          p-6
          backdrop-blur-2xl
        ">

          {/* TOPBAR */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-2xl font-semibold">User Directory</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Manage users, roles, and account status
              </p>
            </div>

            <div className="relative w-full lg:w-[340px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
                className="
                  w-full rounded-2xl
                  border border-white/10
                  bg-black/40
                  py-3 pl-11 pr-4
                  text-sm text-white
                  placeholder:text-zinc-500
                  focus:border-white/20
                "
              />
            </div>

          </div>

          {/* CONTENT */}
          {isLoading ? (
            <LoadingState rows={5} />
          ) : filteredUsers.length === 0 ? (
            <EmptyState title="No users found" icon="👥" />
          ) : (
            <DataTable
              columns={[
                { key: 'email', label: 'User' },
                { key: 'role', label: 'Role' },
                { key: 'is_active', label: 'Status' },
                { key: 'is_email_verified', label: 'Email' },
                { key: 'created_at', label: 'Joined' },
              ]}
              data={filteredUsers.map((u) => ({
                ...u,

                email: (
                  <div>
                    <div className="font-medium text-white">{u.email}</div>
                    <div className="text-xs text-zinc-500">
                      {u.first_name} {u.last_name}
                    </div>
                  </div>
                ),

                role: (
                  <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
                    {u.role}
                  </div>
                ),

                is_active: u.is_active ? (
                  <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    Active
                  </div>
                ) : (
                  <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                    Inactive
                  </div>
                ),

                is_email_verified: u.is_email_verified ? (
                  <div className="text-emerald-400 text-xs flex items-center gap-1">
                    <MailCheck size={14} /> Verified
                  </div>
                ) : (
                  <div className="text-yellow-400 text-xs flex items-center gap-1">
                    <MailX size={14} /> Unverified
                  </div>
                ),

                created_at: (
                  <div className="text-zinc-400">
                    {new Date(u.created_at).toLocaleDateString()}
                  </div>
                ),
              }))}

              actions={[
                { label: 'View', onClick: (row) => console.log(row) },
                { label: 'Edit', onClick: (row) => console.log(row) },
                {
                  label: 'Ban',
                  onClick: (row) => console.log('Ban:', row),
                  className:
                    'border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20',
                },
              ]}
            />
          )}

        </section>

      </div>
    </div>
  );
}