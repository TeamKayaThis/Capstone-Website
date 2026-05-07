'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';
import EmptyState from '@/src/components/admin/EmptyState';

interface Feedback {
  id: string;
  title: string;
  user_email: string;
  rating: number | null;
  is_resolved: boolean;
  created_at: string;
}

export default function AdminFeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In production, fetch from /api/admin/feedback with auth token
    const demoFeedback: Feedback[] = [
      {
        id: '1',
        title: 'Great film, very moving',
        user_email: 'john@example.com',
        rating: 5,
        is_resolved: false,
        created_at: '2025-01-14',
      },
      {
        id: '2',
        title: 'Video player issue',
        user_email: 'jane@example.com',
        rating: 2,
        is_resolved: true,
        created_at: '2025-01-10',
      },
    ];

    setFeedback(demoFeedback);
    setIsLoading(false);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif text-brand-dark mb-2">Feedback</h1>
        <p className="text-sm text-brand-muted">
          Review user feedback and survey responses
        </p>
      </div>

      {/* Content */}
      {isLoading ? (
        <LoadingState rows={5} />
      ) : feedback.length === 0 ? (
        <EmptyState title="No feedback yet" icon="💬" />
      ) : (
        <DataTable
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'user_email', label: 'User' },
            { key: 'rating', label: 'Rating' },
            { key: 'is_resolved', label: 'Status' },
            { key: 'created_at', label: 'Date' },
          ]}
          data={feedback.map((f) => ({
            ...f,
            rating: f.rating ? `${f.rating}⭐` : 'N/A',
            is_resolved: f.is_resolved ? '✓ Resolved' : '⏳ Pending',
            created_at: new Date(f.created_at).toLocaleDateString(),
          }))}
          actions={[
            { label: 'View', onClick: (row) => console.log('View:', row) },
            {
              label: 'Resolve',
              onClick: (row) => console.log('Resolve:', row),
            },
          ]}
        />
      )}
    </div>
  );
}
