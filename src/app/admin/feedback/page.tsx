'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  MessageSquare,
  Search,
  Sparkles,
  Star,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Eye,
  Check,
  Trash2,
  Filter,
  TrendingUp,
  Users,
  MessageCircleMore,
  ShieldCheck,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import LoadingState from '@/src/components/admin/LoadingState';
import EmptyState from '@/src/components/admin/EmptyState';

interface Feedback {
  id: string;
  title: string;
  user_email: string;
  rating: number | null;
  category: string;
  message: string;
  is_resolved: boolean;
  created_at: string;
}

export default function AdminFeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const demoFeedback: Feedback[] = [
      {
        id: '1',
        title: 'Amazing documentary experience',
        user_email: 'john@example.com',
        rating: 5,
        category: 'Review',
        message:
          'The cinematography and storytelling were incredible.',
        is_resolved: false,
        created_at: '2025-05-20',
      },
      {
        id: '2',
        title: 'Video player issue',
        user_email: 'jane@example.com',
        rating: 2,
        category: 'Bug',
        message:
          'The video pauses automatically on mobile devices.',
        is_resolved: true,
        created_at: '2025-05-18',
      },
      {
        id: '3',
        title: 'Need subtitle option',
        user_email: 'michael@example.com',
        rating: 4,
        category: 'Suggestion',
        message:
          'Please add multilingual subtitle support.',
        is_resolved: false,
        created_at: '2025-05-16',
      },
    ];

    setTimeout(() => {
      setFeedback(demoFeedback);
      setIsLoading(false);
    }, 1200);
  }, []);

  const filteredFeedback = useMemo(() => {
    return feedback.filter((item) =>
      `${item.title} ${item.user_email} ${item.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [feedback, search]);

  const averageRating =
    feedback.length > 0
      ? (
          feedback.reduce(
            (acc, item) => acc + (item.rating || 0),
            0
          ) / feedback.length
        ).toFixed(1)
      : '0';

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
                Community Feedback
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Feedback Center
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Review community opinions, bug reports,
              suggestions, and platform feedback in one
              place.
            </p>
          </div>

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
            <Filter size={18} />
            Filter Feedback
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

          {/* GLOWS */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                USER EXPERIENCE ANALYTICS
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Understand Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}
                  Audience Better
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Analyze reviews, discover issues, monitor
                community satisfaction, and improve the
                overall platform experience.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <MessageSquare
                      size={20}
                      className="text-pink-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Total Feedback
                    </p>

                    <h3 className="font-semibold text-white">
                      {feedback.length}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-yellow-500/20 p-3">
                    <Star
                      size={20}
                      className="text-yellow-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Avg Rating
                    </p>

                    <h3 className="font-semibold text-yellow-400">
                      {averageRating}/5
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <CheckCircle2
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Resolved
                    </p>

                    <h3 className="font-semibold text-emerald-400">
                      {
                        feedback.filter(
                          (item) => item.is_resolved
                        ).length
                      }
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <TrendingUp
                      size={20}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Engagement
                    </p>

                    <h3 className="font-semibold text-sky-400">
                      High
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TABLE SECTION */}
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
                User Feedback
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Monitor and manage community responses.
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
                placeholder="Search feedback..."
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
          ) : filteredFeedback.length === 0 ? (
            <EmptyState
              icon="💬"
              title="No feedback found"
              description="There are currently no community responses available."
            />
          ) : (
            <DataTable
              columns={[
                {
                  key: 'title',
                  label: 'Title',
                },
                {
                  key: 'user_email',
                  label: 'User',
                },
                {
                  key: 'category',
                  label: 'Category',
                },
                {
                  key: 'rating',
                  label: 'Rating',
                },
                {
                  key: 'is_resolved',
                  label: 'Status',
                },
                {
                  key: 'created_at',
                  label: 'Date',
                },
              ]}
              data={filteredFeedback.map((f) => ({
                ...f,

                category:
                  f.category === 'Bug' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                      <AlertTriangle size={12} />
                      Bug
                    </div>
                  ) : f.category === 'Suggestion' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                      <MessageCircleMore size={12} />
                      Suggestion
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      <ShieldCheck size={12} />
                      Review
                    </div>
                  ),

                rating: (
                  <div className="flex items-center gap-1 font-medium text-yellow-400">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    {f.rating || 'N/A'}
                  </div>
                ),

                is_resolved: f.is_resolved ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <CheckCircle2 size={12} />
                    Resolved
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                    <Clock3 size={12} />
                    Pending
                  </div>
                ),

                created_at: (
                  <div className="text-zinc-400">
                    {new Date(
                      f.created_at
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
                  label: 'Resolve',
                  icon: <Check size={14} />,
                  onClick: (row) =>
                    console.log('Resolve:', row),
                  className:
                    'border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20',
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