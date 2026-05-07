'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';
import EmptyState from '@/src/components/admin/EmptyState';

interface Film {
  id: string;
  title: string;
  type: string;
  duration_seconds: number | null;
  is_published: boolean;
  created_at: string;
}

export default function AdminFilmsPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In production, fetch from /api/admin/films with auth token
    const demoFilms: Film[] = [
      {
        id: '1',
        title: 'Main Documentary',
        type: 'full',
        duration_seconds: 3600,
        is_published: true,
        created_at: '2025-01-01',
      },
      {
        id: '2',
        title: 'Awareness Trailer',
        type: 'trailer',
        duration_seconds: 120,
        is_published: true,
        created_at: '2024-12-15',
      },
    ];

    setFilms(demoFilms);
    setIsLoading(false);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-brand-dark mb-2">Films</h1>
          <p className="text-sm text-brand-muted">
            Upload and manage film content
          </p>
        </div>
        <button className="px-6 py-2 bg-brand-dark text-white rounded text-xs font-sans tracking-widest uppercase hover:bg-black transition-colors">
          Upload Film
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <LoadingState rows={5} />
      ) : films.length === 0 ? (
        <EmptyState
          title="No films found"
          icon="🎬"
          action={{ label: 'Upload Film', onClick: () => {} }}
        />
      ) : (
        <DataTable
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'type', label: 'Type' },
            { key: 'duration', label: 'Duration' },
            { key: 'is_published', label: 'Status' },
            { key: 'created_at', label: 'Created' },
          ]}
          data={films.map((f) => ({
            ...f,
            duration: f.duration_seconds
              ? `${Math.floor(f.duration_seconds / 60)}m`
              : 'N/A',
            is_published: f.is_published ? '✓ Published' : '✗ Draft',
            created_at: new Date(f.created_at).toLocaleDateString(),
          }))}
          actions={[
            { label: 'Edit', onClick: (row) => console.log('Edit:', row) },
            {
              label: 'Delete',
              onClick: (row) => console.log('Delete:', row),
              className: 'border-red-300 text-red-700 hover:bg-red-50',
            },
          ]}
        />
      )}
    </div>
  );
}
