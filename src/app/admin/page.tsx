'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Users,
  Activity,
  Clock3,
  ShieldCheck,
  Eye,
  ClipboardList,
  MessageSquare,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalSurveys: number;
  totalFeedback: number;
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
      totalSurveys: 5,
      totalFeedback: 42,
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
        action: 'Survey Completed',
        resource: 'Awareness Survey',
        timestamp: '1 day ago',
      },
      {
        id: '3',
        action: 'Feedback Submitted',
        resource: 'Film Experience Review',
        timestamp: '2 days ago',
      },
    ];

    setTimeout(() => {
      setStats(demoStats);
      setActivities(demoActivities);
      setIsLoading(false);
    }, 1000);
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
              <ShieldCheck size={15} className="text-emerald-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Admin Dashboard
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Welcome Back, Admin
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-zinc-400">
              Monitor users, surveys, and feedback activity across the platform.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* QUICK NAV */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          <Link
            href="/admin/users"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <Users className="text-pink-400" />
            <p className="mt-3 font-semibold">Users</p>
            <p className="text-xs text-zinc-500">Manage platform users</p>
          </Link>

          <Link
            href="/admin/surveys"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <ClipboardList className="text-violet-400" />
            <p className="mt-3 font-semibold">Surveys</p>
            <p className="text-xs text-zinc-500">Track responses</p>
          </Link>

          <Link
            href="/admin/feedback"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <MessageSquare className="text-emerald-400" />
            <p className="mt-3 font-semibold">Feedback</p>
            <p className="text-xs text-zinc-500">User insights</p>
          </Link>

        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {isLoading ? (
            <LoadingState rows={4} />
          ) : stats ? (
            <>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-zinc-500">Total Users</p>
                <h2 className="mt-4 text-4xl font-bold">{stats.totalUsers}</h2>
              </div>

              <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/10 p-6">
                <p className="text-sm text-emerald-200">Active Users</p>
                <h2 className="mt-4 text-4xl font-bold text-emerald-400">
                  {stats.activeUsers}
                </h2>
              </div>

              <div className="rounded-[28px] border border-violet-500/20 bg-violet-500/10 p-6">
                <p className="text-sm text-violet-200">Surveys</p>
                <h2 className="mt-4 text-4xl font-bold text-violet-400">
                  {stats.totalSurveys}
                </h2>
              </div>

              <div className="rounded-[28px] border border-pink-500/20 bg-pink-500/10 p-6">
                <p className="text-sm text-pink-200">Feedback</p>
                <h2 className="mt-4 text-4xl font-bold text-pink-400">
                  {stats.totalFeedback}
                </h2>
              </div>
            </>
          ) : null}
        </section>

        {/* ================================================= */}
        {/* RECENT ACTIVITY */}
        {/* ================================================= */}
        <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Latest platform updates and actions.
            </p>
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