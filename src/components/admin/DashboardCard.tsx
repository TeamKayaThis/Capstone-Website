'use client';

import { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendUp = true,
  className = '',
}: DashboardCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.04]
        p-6
        shadow-2xl
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.06]
        ${className}
      `}
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 flex items-start justify-between gap-4">

        {/* LEFT */}
        <div className="flex-1">

          {/* TITLE */}
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            {title}
          </p>

          {/* VALUE */}
          <h3 className="mt-4 text-4xl font-bold tracking-tight text-white">
            {value}
          </h3>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="mt-2 text-sm text-zinc-400">
              {subtitle}
            </p>
          )}

          {/* TREND */}
          {trend && (
            <div
              className={`
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-medium
                ${
                  trendUp
                    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                    : 'border-red-500/20 bg-red-500/10 text-red-400'
                }
              `}
            >
              <ArrowUpRight size={12} />

              {trend}
            </div>
          )}
        </div>

        {/* ICON */}
        {icon && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
            {icon}
          </div>
        )}
      </div>

      {/* ================================================= */}
      {/* BOTTOM SHINE */}
      {/* ================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}