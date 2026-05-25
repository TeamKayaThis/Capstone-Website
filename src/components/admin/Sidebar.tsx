'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  LayoutDashboard,
  Users,
  Film,
  ClipboardList,
  MessageSquare,
  FolderKanban,
  Settings,
  Menu,
  X,
  Shield,
  ChevronRight,
  LogOut,
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      label: 'Users',
      href: '/admin/users',
      icon: Users,
    },
    {
      label: 'Films',
      href: '/admin/films',
      icon: Film,
    },
    {
      label: 'Surveys',
      href: '/admin/surveys',
      icon: ClipboardList,
    },
    {
      label: 'Feedback',
      href: '/admin/feedback',
      icon: MessageSquare,
    },
    {
      label: 'Content',
      href: '/admin/content',
      icon: FolderKanban,
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* MOBILE TOGGLE */}
      {/* ================================================= */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed left-4 top-4 z-[60]
          flex items-center justify-center
          rounded-2xl
          border border-white/10
          bg-black/70
          p-3
          text-white
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/10
          md:hidden
        "
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[280px] flex-col
          border-r border-white/10
          bg-zinc-950/95
          backdrop-blur-2xl
          transition-transform duration-300 ease-in-out

          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }

          md:translate-x-0
        `}
      >

        {/* ================================================= */}
        {/* TOP BRAND */}
        {/* ================================================= */}

        <div className="border-b border-white/10 p-7">

          <div className="flex items-center gap-4">

            {/* LOGO */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/20">

              <Shield size={22} className="text-white" />
            </div>

            {/* TITLE */}
            <div>

              <h2 className="text-lg font-bold tracking-wide text-white">
                Admin Panel
              </h2>

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                NGINIG SYSTEM
              </p>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* NAVIGATION */}
        {/* ================================================= */}

        <div className="flex-1 overflow-y-auto px-4 py-6">

          <div className="mb-4 px-3">

            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
              Navigation
            </p>
          </div>

          <nav className="space-y-2">

            {menuItems.map((item) => {
              const isActive =
                pathname === item.href;

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group
                    relative
                    flex items-center justify-between
                    rounded-2xl
                    px-4 py-3.5
                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          border border-white/10
                          bg-gradient-to-r
                          from-pink-500/20
                          to-violet-500/20
                          text-white
                          shadow-lg
                          shadow-pink-500/5
                        `
                        : `
                          text-zinc-400
                          hover:bg-white/[0.04]
                          hover:text-white
                        `
                    }
                  `}
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        rounded-xl
                        p-2
                        transition-all duration-300

                        ${
                          isActive
                            ? 'bg-white/10 text-pink-300'
                            : 'bg-white/[0.03] text-zinc-500 group-hover:text-white'
                        }
                      `}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>

                  {/* RIGHT ICON */}
                  <ChevronRight
                    size={16}
                    className={`
                      transition-all duration-300

                      ${
                        isActive
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div className="border-t border-white/10 p-5">

          {/* PROFILE */}
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 text-sm font-bold text-white">
              A
            </div>

            <div className="flex-1">

              <h4 className="text-sm font-semibold text-white">
                Administrator
              </h4>

              <p className="text-xs text-zinc-500">
                admin@nginig.com
              </p>
            </div>
          </div>

          {/* LOGOUT */}
          <button
            className="
              flex w-full items-center justify-center gap-2
              rounded-2xl
              border border-red-500/20
              bg-red-500/10
              px-4 py-3
              text-sm font-medium text-red-400
              transition-all duration-300
              hover:bg-red-500/20
            "
          >
            <LogOut size={16} />

            Logout
          </button>

          {/* COPYRIGHT */}
          <p className="mt-5 text-center text-[11px] tracking-wide text-zinc-600">
            © 2025 Nginig Admin System
          </p>
        </div>
      </aside>

      {/* ================================================= */}
      {/* MOBILE BACKDROP */}
      {/* ================================================= */}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}