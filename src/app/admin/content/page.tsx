'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  FolderKanban,
  Search,
  Upload,
  ImageIcon,
  Video,
  FileText,
  Trash2,
  Pencil,
  Eye,
  Plus,
  Sparkles,
  HardDrive,
  Files,
  Clock3,
  ArrowUpRight,
} from 'lucide-react';

import DataTable from '@/src/components/admin/DataTable';
import EmptyState from '@/src/components/admin/EmptyState';
import LoadingState from '@/src/components/admin/LoadingState';

interface ContentItem {
  id: string;
  name: string;
  type: 'Image' | 'Video' | 'Document';
  size: string;
  uploaded_by: string;
  created_at: string;
  status: 'Published' | 'Draft';
}

export default function AdminContentPage() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const demoContent: ContentItem[] = [
      {
        id: '1',
        name: 'main-banner.jpg',
        type: 'Image',
        size: '2.4 MB',
        uploaded_by: 'Admin',
        created_at: '2025-05-20',
        status: 'Published',
      },
      {
        id: '2',
        name: 'documentary-trailer.mp4',
        type: 'Video',
        size: '124 MB',
        uploaded_by: 'John Doe',
        created_at: '2025-05-18',
        status: 'Published',
      },
      {
        id: '3',
        name: 'research-paper.pdf',
        type: 'Document',
        size: '8.1 MB',
        uploaded_by: 'Admin',
        created_at: '2025-05-15',
        status: 'Draft',
      },
    ];

    setTimeout(() => {
      setContent(demoContent);
      setIsLoading(false);
    }, 1200);
  }, []);

  const filteredContent = useMemo(() => {
    return content.filter((item) =>
      `${item.name} ${item.type}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [content, search]);

  const totalStorage = '134.5 GB';

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
                Content Management
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Content Library
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Upload, organize, and manage your platform
              media assets, videos, and documents.
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
            Upload Content
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
                DIGITAL ASSET CENTER
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Organize Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}
                  Media Ecosystem
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Manage videos, images, documents, and all
                platform resources from one centralized
                content dashboard.
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
                  Open Media Library
                  <ArrowUpRight size={16} />
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
                  Manage Storage
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <Files
                      size={20}
                      className="text-pink-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Total Files
                    </p>

                    <h3 className="font-semibold text-white">
                      {content.length}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <HardDrive
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Storage Used
                    </p>

                    <h3 className="font-semibold text-emerald-400">
                      {totalStorage}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <ImageIcon
                      size={20}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Images
                    </p>

                    <h3 className="font-semibold text-violet-400">
                      124
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <Video
                      size={20}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Videos
                    </p>

                    <h3 className="font-semibold text-sky-400">
                      38
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CONTENT TABLE */}
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
                Media Assets
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                View and manage all uploaded content.
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
                placeholder="Search content..."
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

          {/* CONTENT */}
          {isLoading ? (
            <LoadingState rows={5} />
          ) : filteredContent.length === 0 ? (
            <EmptyState
              title="No content found"
              description="Your media library is currently empty."
              action={{
                label: 'Upload Content',
                onClick: () =>
                  console.log('Upload'),
              }}
            />
          ) : (
            <DataTable
              columns={[
                {
                  key: 'name',
                  label: 'File Name',
                },
                {
                  key: 'type',
                  label: 'Type',
                },
                {
                  key: 'size',
                  label: 'Size',
                },
                {
                  key: 'uploaded_by',
                  label: 'Uploaded By',
                },
                {
                  key: 'status',
                  label: 'Status',
                },
                {
                  key: 'created_at',
                  label: 'Date',
                },
              ]}
              data={filteredContent.map((item) => ({
                ...item,

                type:
                  item.type === 'Image' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                      <ImageIcon size={12} />
                      Image
                    </div>
                  ) : item.type === 'Video' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                      <Video size={12} />
                      Video
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      <FileText size={12} />
                      Document
                    </div>
                  ),

                status:
                  item.status === 'Published' ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      Published
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                      <Clock3 size={12} />
                      Draft
                    </div>
                  ),

                created_at: (
                  <div className="text-zinc-400">
                    {new Date(
                      item.created_at
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