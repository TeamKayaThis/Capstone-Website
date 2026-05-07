'use client';

import { useState, useEffect } from 'react';
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In production, fetch from /api/admin/users with auth token
    // For now, show demo data
    const demoUsers: User[] = [
      {
        id: '1',
        email: 'john@example.com',
        first_name: 'John',
        last_name: 'Doe',
        role: 'user',
        is_active: true,
        is_email_verified: true,
        created_at: '2025-01-15',
      },
      {
        id: '2',
        email: 'jane@example.com',
        first_name: 'Jane',
        last_name: 'Smith',
        role: 'user',
        is_active: true,
        is_email_verified: false,
        created_at: '2025-01-10',
      },
    ];

    setUsers(demoUsers);
    setIsLoading(false);
  }, []);

  const handleBanUser = async (user: User) => {
    console.log('Ban user:', user.id);
    // In production: await fetch(`/api/admin/users/${user.id}?action=ban`, { method: 'POST' })
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-brand-dark mb-2">Users</h1>
          <p className="text-sm text-brand-muted">
            Manage platform users and permissions
          </p>
        </div>
        <button className="px-6 py-2 bg-brand-dark text-white rounded text-xs font-sans tracking-widest uppercase hover:bg-black transition-colors">
          Add User
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <LoadingState rows={5} />
      ) : users.length === 0 ? (
        <EmptyState title="No users found" icon="👥" />
      ) : (
        <DataTable
          columns={[
            { key: 'email', label: 'Email' },
            { key: 'first_name', label: 'First Name' },
            { key: 'last_name', label: 'Last Name' },
            { key: 'role', label: 'Role' },
            { key: 'is_active', label: 'Status' },
            { key: 'created_at', label: 'Joined' },
          ]}
          data={users.map((u) => ({
            ...u,
            is_active: u.is_active ? '✓ Active' : '✗ Inactive',
            created_at: new Date(u.created_at).toLocaleDateString(),
          }))}
          actions={[
            { label: 'Edit', onClick: (row) => console.log('Edit:', row) },
            {
              label: 'Ban',
              onClick: (row) => handleBanUser(row as User),
              className: 'border-red-300 text-red-700 hover:bg-red-50',
            },
          ]}
        />
      )}
    </div>
  );
}
