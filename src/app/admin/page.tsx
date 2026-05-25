'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Users,
  Sparkles,
  Film,
  ClipboardList,
  Activity,
  ArrowUpRight,
  Clock3,
  BellDot,
  ShieldCheck,
  TrendingUp,
  Eye,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalFilms: number;
  totalSurveys: number;
}

interface RecentActivity {
  id: string;
  action: string;
  resource: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const demoStats: DashboardStats = {
      totalUsers: 156,
      activeUsers: 89,
      totalFilms: 3,
      totalSurveys: 5,
    };

    const demoActivities: RecentActivity[] = [
      {
        id: '1',
        action: 'User Registered',
        resource: 'john@example.com',
        timestamp: '2 hours ago',
      },
      {
        id: '2',
        action: 'Film Uploaded',
        resource: 'Main Documentary',
        timestamp: '5 hours ago',
      },
      {
        id: '3',
        action: 'Survey Completed',
        resource: 'Awareness Survey',
        timestamp: '1 day ago',
      },
      {
        id: '4',
        action: 'Feedback Submitted',
        resource: 'Film Experience Review',
        timestamp: '2 days ago',
      },
    ];

    setTimeout(() => {
      setStats(demoStats);
      setActivities(demoActivities);
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-8 p-6">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <ShieldCheck
                size={15}
                className="text-emerald-400"
              />

              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Admin Dashboard
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Welcome Back, Admin
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Manage your cinematic platform, monitor engagement,
              publish content, and oversee platform analytics from
              one centralized control center.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-emerald-500/20 p-3">
                  <TrendingUp
                    size={20}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">
                    Platform Growth
                  </p>

                  <h3 className="text-lg font-semibold text-emerald-400">
                    +18.4%
                  </h3>
                </div>
              </div>
            </div>

            <button className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
              <BellDot size={20} />

              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-pink-500" />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)]">

          {/* BACKGROUND GLOW */}
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                CINEMATIC ADMINISTRATION SYSTEM
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Control Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}
                  Entire Platform
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Access user analytics, manage films, monitor
                activities, and review platform interactions in
                real-time.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/admin/films"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  Manage Films
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/admin/users"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-white/10"
                >
                  Manage Users
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <Activity
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      System Status
                    </p>

                    <h3 className="font-semibold text-emerald-400">
                      Operational
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <Eye
                      size={20}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Monitoring
                    </p>

                    <h3 className="font-semibold text-sky-400">
                      Live
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <Film
                      size={20}
                      className="text-pink-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Film Library
                    </p>

                    <h3 className="font-semibold text-pink-400">
                      Updated
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <ClipboardList
                      size={20}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Surveys
                    </p>

                    <h3 className="font-semibold text-violet-400">
                      Active
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {isLoading ? (
            <LoadingState rows={4} />
          ) : stats ? (
            <>
              {/* USERS */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-zinc-500">
                      Total Users
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                      {stats.totalUsers}
                    </h2>

                    <p className="mt-2 text-xs text-zinc-500">
                      Registered accounts
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-4">
                    <Users size={26} />
                  </div>
                </div>
              </div>

              {/* ACTIVE */}
              <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-emerald-200">
                      Active Users
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-emerald-400">
                      {stats.activeUsers}
                    </h2>

                    <p className="mt-2 text-xs text-emerald-300/70">
                      This month
                    </p>
                  </div>

                  <div className="rounded-3xl bg-emerald-500/20 p-4">
                    <Sparkles
                      size={26}
                      className="text-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* FILMS */}
              <div className="rounded-[28px] border border-pink-500/20 bg-pink-500/10 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-pink-500/40">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-pink-200">
                      Published Films
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-pink-400">
                      {stats.totalFilms}
                    </h2>

                    <p className="mt-2 text-xs text-pink-300/70">
                      Available content
                    </p>
                  </div>

                  <div className="rounded-3xl bg-pink-500/20 p-4">
                    <Film
                      size={26}
                      className="text-pink-400"
                    />
                  </div>
                </div>
              </div>

              {/* SURVEYS */}
              <div className="rounded-[28px] border border-violet-500/20 bg-violet-500/10 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-violet-500/40">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-violet-200">
                      Surveys
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-violet-400">
                      {stats.totalSurveys}
                    </h2>

                    <p className="mt-2 text-xs text-violet-300/70">
                      Active forms
                    </p>
                  </div>

                  <div className="rounded-3xl bg-violet-500/20 p-4">
                    <ClipboardList
                      size={26}
                      className="text-violet-400"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </section>

        {/* ================================================= */}
        {/* RECENT ACTIVITY */}
        {/* ================================================= */}

        <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="text-2xl font-semibold">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Latest activities happening across the platform.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-400">
              <Clock3 size={14} />
              Real-time monitoring enabled
            </div>
          </div>

          {isLoading ? (
            <LoadingState rows={3} />
          ) : (
            <DataTable
              columns={[
                { key: 'action', label: 'Action' },
                { key: 'resource', label: 'Resource' },
                { key: 'timestamp', label: 'Timestamp' },
              ]}
              data={activities}
            />
          )}
        </section>
      </div>
    </div>
  );
}