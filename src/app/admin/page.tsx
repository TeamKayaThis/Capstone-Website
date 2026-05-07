'use client';

import { useState, useEffect } from 'react';
import DashboardCard from '@/src/components/admin/DashboardCard';
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
    // In production, fetch from your API
    // For now, show demo data
    const demoStats: DashboardStats = {
      totalUsers: 156,
      activeUsers: 89,
      totalFilms: 3,
      totalSurveys: 5,
    };

    const demoActivities: RecentActivity[] = [
      {
        id: '1',
        action: 'User registered',
        resource: 'john@example.com',
        timestamp: '2 hours ago',
      },
      {
        id: '2',
        action: 'Film uploaded',
        resource: 'Main Documentary',
        timestamp: '5 hours ago',
      },
      {
        id: '3',
        action: 'Survey completed',
        resource: 'Awareness Survey',
        timestamp: '1 day ago',
      },
    ];

    setStats(demoStats);
    setActivities(demoActivities);
    setIsLoading(false);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif text-brand-dark mb-2">Dashboard</h1>
        <p className="text-sm text-brand-muted">
          Welcome back! Here's your platform overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <LoadingState rows={4} />
        ) : stats ? (
          <>
            <DashboardCard
              title="Total Users"
              value={stats.totalUsers}
              icon="👥"
              subtitle="Registered users"
            />
            <DashboardCard
              title="Active Users"
              value={stats.activeUsers}
              icon="✨"
              subtitle="This month"
            />
            <DashboardCard
              title="Films"
              value={stats.totalFilms}
              icon="🎬"
              subtitle="Published"
            />
            <DashboardCard
              title="Surveys"
              value={stats.totalSurveys}
              icon="📝"
              subtitle="Active surveys"
            />
          </>
        ) : null}
      </div>

      {/* Recent Activity */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-serif text-brand-dark">
            Recent Activity
          </h2>
          <p className="text-xs text-brand-muted mt-1">
            Latest actions on the platform
          </p>
        </div>

        {isLoading ? (
          <LoadingState rows={3} />
        ) : (
          <DataTable
            columns={[
              { key: 'action', label: 'Action' },
              { key: 'resource', label: 'Resource' },
              { key: 'timestamp', label: 'Time' },
            ]}
            data={activities}
          />
        )}
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-100 rounded-lg">
          <h3 className="text-lg font-serif text-brand-dark mb-4">
            Manage Users
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            View, edit, or remove user accounts
          </p>
          <a
            href="/admin/users"
            className="inline-block px-4 py-2 bg-brand-dark text-white rounded text-xs font-sans tracking-widest uppercase hover:bg-black transition-colors"
          >
            Go to Users
          </a>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg">
          <h3 className="text-lg font-serif text-brand-dark mb-4">
            Manage Films
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Upload and publish film content
          </p>
          <a
            href="/admin/films"
            className="inline-block px-4 py-2 bg-brand-dark text-white rounded text-xs font-sans tracking-widest uppercase hover:bg-black transition-colors"
          >
            Go to Films
          </a>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-lg">
          <h3 className="text-lg font-serif text-brand-dark mb-4">
            View Feedback
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Review user feedback and surveys
          </p>
          <a
            href="/admin/feedback"
            className="inline-block px-4 py-2 bg-brand-dark text-white rounded text-xs font-sans tracking-widest uppercase hover:bg-black transition-colors"
          >
            Go to Feedback
          </a>
        </div>
      </section>
    </div>
  );
}
