'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  ClipboardList,
  BarChart3,
  Sparkles,
  Search,
  Eye,
  Pencil,
  Trash2,
  Plus,
  Clock3,
  CheckCircle2,
  Users,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import EmptyState from '@/src/components/admin/EmptyState';
import LoadingState from '@/src/components/admin/LoadingState';

interface Survey {
  id: string;
  title: string;
  status: 'active' | 'draft' | 'closed';
  responses: number;
  created_at: string;
  category: string;
}

export default function AdminSurveysPage() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const demoSurveys: Survey[] = [
      {
        id: '1',
        title: 'Film Awareness Survey',
        status: 'active',
        responses: 128,
        created_at: '2025-05-10',
        category: 'Awareness',
      },
      {
        id: '2',
        title: 'User Experience Feedback',
        status: 'draft',
        responses: 0,
        created_at: '2025-05-18',
        category: 'Feedback',
      },
      {
        id: '3',
        title: 'Documentary Impact Study',
        status: 'closed',
        responses: 342,
        created_at: '2025-04-22',
        category: 'Research',
      },
    ];

    setTimeout(() => {
      setSurveys(demoSurveys);
      setIsLoading(false);
    }, 1200);
  }, []);

  const filteredSurveys = useMemo(() => {
    return surveys.filter((survey) =>
      `${survey.title} ${survey.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, surveys]);

  const activeSurveys = surveys.filter(
    (s) => s.status === 'active'
  ).length;

  const totalResponses = surveys.reduce(
    (acc, curr) => acc + curr.responses,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* HEADER */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles size={15} className="text-pink-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Survey Management
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Surveys
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Create surveys, monitor responses, and analyze engagement data across the platform.
            </p>
          </div>
        </div>

        {/* HERO */}
        <section className="
          relative overflow-hidden
          rounded-[36px]
          border border-white/10
          bg-gradient-to-br from-zinc-900 via-black to-zinc-950
          p-8
          shadow-[0_0_80px_rgba(255,255,255,0.03)]
        ">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                ANALYTICS & INSIGHTS
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Understand Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}Audience Better
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Track responses, monitor engagement, and manage survey performance in real time.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <ClipboardList size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Total Surveys</p>
                    <h3 className="font-semibold text-white">{surveys.length}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Active</p>
                    <h3 className="font-semibold text-emerald-400">{activeSurveys}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <Users size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Responses</p>
                    <h3 className="font-semibold text-sky-400">{totalResponses}</h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <BarChart3 size={20} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Insights</p>
                    <h3 className="font-semibold text-violet-400">Live</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          p-6
          shadow-2xl
          backdrop-blur-2xl
        ">

          {/* TOPBAR */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-2xl font-semibold">Survey Directory</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Manage all platform surveys and responses.
              </p>
            </div>

            <div className="relative w-full lg:w-[340px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="text"
                placeholder="Search surveys..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
          ) : filteredSurveys.length === 0 ? (
            <EmptyState title="No surveys found" icon="📊" />
          ) : (
            <DataTable
              columns={[
                { key: 'title', label: 'Survey' },
                { key: 'category', label: 'Category' },
                { key: 'status', label: 'Status' },
                { key: 'responses', label: 'Responses' },
                { key: 'created_at', label: 'Created' },
              ]}
              data={filteredSurveys.map((survey) => ({
                ...survey,

                category: (
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {survey.category}
                  </div>
                ),

                status:
                  survey.status === 'active' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      <CheckCircle2 size={12} />
                      Active
                    </div>
                  ) : survey.status === 'draft' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                      <Clock3 size={12} />
                      Draft
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                      Closed
                    </div>
                  ),

                responses: (
                  <div className="font-medium text-white">
                    {survey.responses}
                  </div>
                ),

                created_at: (
                  <div className="text-zinc-400">
                    {new Date(survey.created_at).toLocaleDateString()}
                  </div>
                ),
              }))}
              actions={[
                { label: 'View', icon: <Eye size={14} />, onClick: (row) => console.log(row) },
                { label: 'Edit', icon: <Pencil size={14} />, onClick: (row) => console.log(row) },
                {
                  label: 'Delete',
                  icon: <Trash2 size={14} />,
                  onClick: (row) => console.log('Delete:', row),
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