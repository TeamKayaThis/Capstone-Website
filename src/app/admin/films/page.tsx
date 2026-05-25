'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  Film,
  Upload,
  Search,
  Sparkles,
  PlayCircle,
  Clock3,
  Eye,
  Pencil,
  Trash2,
  CheckCircle2,
  Video,
  Tv,
  Layers3,
  TrendingUp,
  Star,
  CalendarDays,
  Plus,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';
import EmptyState from '@/src/components/admin/EmptyState';

interface FilmItem {
  id: string;
  title: string;
  type: string;
  duration_seconds: number | null;
  views: number;
  rating: number;
  is_published: boolean;
  created_at: string;
}

export default function AdminFilmsPage() {
  const [films, setFilms] = useState<FilmItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const demoFilms: FilmItem[] = [
      {
        id: '1',
        title: 'Main Documentary',
        type: 'Full Film',
        duration_seconds: 5400,
        views: 2450,
        rating: 4.9,
        is_published: true,
        created_at: '2025-05-20',
      },
      {
        id: '2',
        title: 'Awareness Trailer',
        type: 'Trailer',
        duration_seconds: 180,
        views: 1320,
        rating: 4.6,
        is_published: true,
        created_at: '2025-05-18',
      },
      {
        id: '3',
        title: 'Behind The Scenes',
        type: 'Featurette',
        duration_seconds: 900,
        views: 620,
        rating: 4.3,
        is_published: false,
        created_at: '2025-05-15',
      },
    ];

    setTimeout(() => {
      setFilms(demoFilms);
      setIsLoading(false);
    }, 1200);
  }, []);

  const filteredFilms = useMemo(() => {
    return films.filter((film) =>
      `${film.title} ${film.type}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [films, search]);

  const totalViews = films.reduce(
    (acc, film) => acc + film.views,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles
                size={15}
                className="text-pink-400"
              />

              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Film Management
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Film Studio
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Upload, publish, organize, and manage your
              cinematic content from one centralized
              dashboard.
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl
              bg-white
              px-6 py-3
              text-sm font-medium text-black
              transition-all duration-300
              hover:scale-[1.03]
            "
          >
            <Upload size={18} />
            Upload Film
          </button>
        </div>

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section
          className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-950
            p-8
            shadow-[0_0_80px_rgba(255,255,255,0.03)]
          "
        >

          {/* GLOW */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                CINEMATIC CONTENT CENTER
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Manage Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}
                  Film Universe
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Control film publishing, trailers,
                documentaries, featured content, and media
                performance analytics with a modern admin
                experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl
                    bg-white
                    px-5 py-3
                    text-sm font-medium text-black
                    transition-all duration-300
                    hover:scale-[1.03]
                  "
                >
                  Open Studio
                  <Plus size={16} />
                </button>

                <button
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-5 py-3
                    text-sm text-white
                    transition-all duration-300
                    hover:bg-white/10
                  "
                >
                  View Analytics
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

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
                      Total Films
                    </p>

                    <h3 className="font-semibold text-white">
                      {films.length}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <Eye
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Total Views
                    </p>

                    <h3 className="font-semibold text-emerald-400">
                      {totalViews.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <TrendingUp
                      size={20}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Engagement
                    </p>

                    <h3 className="font-semibold text-violet-400">
                      High
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <Tv
                      size={20}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Published
                    </p>

                    <h3 className="font-semibold text-sky-400">
                      {
                        films.filter(
                          (film) => film.is_published
                        ).length
                      }
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* FILMS TABLE */}
        {/* ================================================= */}

        <section
          className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-6
            shadow-2xl
            backdrop-blur-2xl
          "
        >

          {/* TOPBAR */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-2xl font-semibold">
                Film Library
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Manage your uploaded films and media.
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:w-[340px]">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                placeholder="Search films..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-black/40
                  py-3 pl-11 pr-4
                  text-sm text-white
                  outline-none
                  transition-all duration-300
                  placeholder:text-zinc-500
                  focus:border-white/20
                "
              />
            </div>
          </div>

          {/* TABLE */}
          {isLoading ? (
            <LoadingState rows={5} />
          ) : filteredFilms.length === 0 ? (
            <EmptyState
              icon="🎬"
              title="No films found"
              description="Your cinematic library is currently empty."
              action={{
                label: 'Upload Film',
                onClick: () =>
                  console.log('Upload'),
              }}
            />
          ) : (
            <DataTable
              columns={[
                {
                  key: 'title',
                  label: 'Title',
                },
                {
                  key: 'type',
                  label: 'Type',
                },
                {
                  key: 'duration',
                  label: 'Duration',
                },
                {
                  key: 'views',
                  label: 'Views',
                },
                {
                  key: 'rating',
                  label: 'Rating',
                },
                {
                  key: 'is_published',
                  label: 'Status',
                },
                {
                  key: 'created_at',
                  label: 'Created',
                },
              ]}
              data={filteredFilms.map((film) => ({
                ...film,

                type:
                  film.type === 'Trailer' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400">
                      <PlayCircle size={12} />
                      Trailer
                    </div>
                  ) : film.type === 'Featurette' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                      <Layers3 size={12} />
                      Featurette
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                      <Video size={12} />
                      Full Film
                    </div>
                  ),

                duration: (
                  <div className="inline-flex items-center gap-2 text-zinc-300">
                    <Clock3 size={14} />
                    {film.duration_seconds
                      ? `${Math.floor(
                          film.duration_seconds / 60
                        )}m`
                      : 'N/A'}
                  </div>
                ),

                views: (
                  <div className="font-medium text-zinc-300">
                    {film.views.toLocaleString()}
                  </div>
                ),

                rating: (
                  <div className="flex items-center gap-1 font-medium text-yellow-400">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    {film.rating}
                  </div>
                ),

                is_published: film.is_published ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <CheckCircle2 size={12} />
                    Published
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                    <Clock3 size={12} />
                    Draft
                  </div>
                ),

                created_at: (
                  <div className="inline-flex items-center gap-2 text-zinc-400">
                    <CalendarDays size={14} />
                    {new Date(
                      film.created_at
                    ).toLocaleDateString()}
                  </div>
                ),
              }))}
              actions={[
                {
                  label: 'View',
                  icon: <Eye size={14} />,
                  onClick: (row) =>
                    console.log('View:', row),
                },
                {
                  label: 'Edit',
                  icon: <Pencil size={14} />,
                  onClick: (row) =>
                    console.log('Edit:', row),
                },
                {
                  label: 'Delete',
                  icon: <Trash2 size={14} />,
                  onClick: (row) =>
                    console.log('Delete:', row),
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