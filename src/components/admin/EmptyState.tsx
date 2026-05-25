'use client';

import { ReactNode } from 'react';

import {
  Inbox,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;

  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border border-white/10
        bg-white/[0.03]
        px-6 py-20
        shadow-2xl
        backdrop-blur-2xl
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* ICON */}
        <div
          className="
            mb-8
            flex h-28 w-28 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/[0.04]
            shadow-xl
          "
        >

          {icon ? (
            <div className="text-white">
              {icon}
            </div>
          ) : (
            <Inbox
              size={42}
              className="text-zinc-500"
            />
          )}
        </div>

        {/* BADGE */}
        <div
          className="
            mb-5
            inline-flex items-center gap-2
            rounded-full
            border border-white/10
            bg-white/[0.04]
            px-4 py-2
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={14}
            className="text-pink-400"
          />

          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Empty State
          </span>
        </div>

        {/* TITLE */}
        <h3 className="max-w-xl text-3xl font-bold tracking-tight text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
            {description}
          </p>
        )}

        {/* ACTION BUTTON */}
        {action && (
          <button
            onClick={action.onClick}
            className="
              group
              mt-8
              inline-flex items-center gap-3
              rounded-2xl
              bg-white
              px-6 py-3
              text-sm font-medium text-black
              transition-all duration-300
              hover:scale-[1.03]
            "
          >

            {action.label}

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        )}
      </div>

      {/* ================================================= */}
      {/* BOTTOM SHINE */}
      {/* ================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}