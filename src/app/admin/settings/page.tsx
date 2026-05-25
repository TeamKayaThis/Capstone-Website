'use client';

import { useState } from 'react';

import {
  Settings,
  Shield,
  Bell,
  Palette,
  Database,
  Globe,
  Lock,
  Save,
  Moon,
  Upload,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function AdminContentPage() {
  const [siteName, setSiteName] = useState('Nginig');
  const [maintenanceMode, setMaintenanceMode] =
    useState(false);

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
                System Configuration
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Settings
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Configure your admin dashboard, platform
              preferences, notifications, and security
              settings.
            </p>
          </div>

          {/* SAVE BUTTON */}
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
            <Save size={18} />
            Save Changes
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
                ADMIN CONTROL CENTER
              </p>

              <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                Customize Your
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}
                  Platform Experience
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Manage system-wide settings, upload assets,
                configure branding, and secure your platform.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-pink-500/20 p-3">
                    <Shield
                      size={20}
                      className="text-pink-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Security
                    </p>

                    <h3 className="font-semibold text-white">
                      Protected
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-emerald-500/20 p-3">
                    <Database
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Database
                    </p>

                    <h3 className="font-semibold text-emerald-400">
                      Online
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-violet-500/20 p-3">
                    <Bell
                      size={20}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Notifications
                    </p>

                    <h3 className="font-semibold text-violet-400">
                      Enabled
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-500/20 p-3">
                    <Globe
                      size={20}
                      className="text-sky-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Platform
                    </p>

                    <h3 className="font-semibold text-sky-400">
                      Live
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* SETTINGS GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

          {/* ================================================= */}
          {/* LEFT COLUMN */}
          {/* ================================================= */}

          <div className="space-y-8 xl:col-span-2">

            {/* GENERAL SETTINGS */}
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

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-2xl bg-pink-500/10 p-3">
                  <Settings
                    size={20}
                    className="text-pink-400"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    General Settings
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Manage your platform information.
                  </p>
                </div>
              </div>

              <div className="space-y-5">

                {/* SITE NAME */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Site Name
                  </label>

                  <input
                    type="text"
                    value={siteName}
                    onChange={(e) =>
                      setSiteName(e.target.value)
                    }
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-black/40
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      transition-all duration-300
                      placeholder:text-zinc-500
                      focus:border-white/20
                    "
                  />
                </div>

                {/* SITE DESCRIPTION */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Site Description
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Enter your platform description..."
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-black/40
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      transition-all duration-300
                      placeholder:text-zinc-500
                      focus:border-white/20
                    "
                  />
                </div>

                {/* UPLOAD */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Upload Logo
                  </label>

                  <button
                    className="
                      flex w-full items-center justify-center gap-3
                      rounded-2xl
                      border border-dashed border-white/10
                      bg-white/[0.02]
                      px-6 py-8
                      text-sm text-zinc-400
                      transition-all duration-300
                      hover:bg-white/[0.05]
                    "
                  >
                    <Upload size={18} />
                    Upload File
                  </button>
                </div>
              </div>
            </section>

            {/* SECURITY */}
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

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-2xl bg-violet-500/10 p-3">
                  <Lock
                    size={20}
                    className="text-violet-400"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Security
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Protect your admin platform.
                  </p>
                </div>
              </div>

              <div className="space-y-5">

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div>
                    <h3 className="font-medium text-white">
                      Two-Factor Authentication
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Add an extra security layer.
                    </p>
                  </div>

                  <div className="h-7 w-14 rounded-full bg-emerald-500 p-1">
                    <div className="ml-auto h-5 w-5 rounded-full bg-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div>
                    <h3 className="font-medium text-white">
                      Maintenance Mode
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Temporarily disable public access.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setMaintenanceMode(
                        !maintenanceMode
                      )
                    }
                    className={`
                      relative h-7 w-14 rounded-full transition-all duration-300
                      ${
                        maintenanceMode
                          ? 'bg-pink-500'
                          : 'bg-zinc-700'
                      }
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300
                        ${
                          maintenanceMode
                            ? 'left-8'
                            : 'left-1'
                        }
                      `}
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* ================================================= */}
          {/* RIGHT COLUMN */}
          {/* ================================================= */}

          <div className="space-y-8">

            {/* APPEARANCE */}
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

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-2xl bg-sky-500/10 p-3">
                  <Palette
                    size={20}
                    className="text-sky-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Appearance
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Dashboard visual settings.
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                <button
                  className="
                    flex w-full items-center justify-between
                    rounded-2xl
                    border border-pink-500/20
                    bg-pink-500/10
                    px-5 py-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <Moon
                      size={18}
                      className="text-pink-400"
                    />

                    <span className="text-sm font-medium text-white">
                      Dark Mode
                    </span>
                  </div>

                  <CheckCircle2
                    size={18}
                    className="text-pink-400"
                  />
                </button>

                <button
                  className="
                    flex w-full items-center justify-between
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 py-4
                    transition-all duration-300
                    hover:bg-white/[0.05]
                  "
                >

                  <span className="text-sm text-zinc-400">
                    Light Mode
                  </span>
                </button>
              </div>
            </section>

            {/* NOTIFICATIONS */}
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

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-2xl bg-emerald-500/10 p-3">
                  <Bell
                    size={20}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Notifications
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Manage alerts & updates.
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                {[
                  'Email Notifications',
                  'New User Alerts',
                  'Survey Reports',
                  'Security Warnings',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >

                    <span className="text-sm text-zinc-300">
                      {item}
                    </span>

                    <div className="h-6 w-12 rounded-full bg-emerald-500 p-1">
                      <div className="ml-auto h-4 w-4 rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}