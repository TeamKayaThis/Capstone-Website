'use client';

import { ReactNode } from 'react';

import {
  ChevronRight,
  MoreHorizontal,
} from 'lucide-react';

export interface DataTableProps {
  columns: Array<{
    key: string;
    label: string;
    className?: string;
  }>;

  data: Array<Record<string, any>>;

  onRowClick?: (
    row: Record<string, any>
  ) => void;

  actions?: Array<{
    label: string;
    icon?: ReactNode;
    onClick: (
      row: Record<string, any>
    ) => void;
    className?: string;
  }>;

  isLoading?: boolean;
}

export default function DataTable({
  columns,
  data,
  onRowClick,
  actions,
  isLoading,
}: DataTableProps) {

  /* ================================================= */
  /* LOADING STATE */
  /* ================================================= */

  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">

        <div className="animate-pulse">

          {/* HEADER */}
          <div className="border-b border-white/10 px-6 py-5">
            <div className="h-4 w-40 rounded bg-white/10" />
          </div>

          {/* ROWS */}
          <div className="space-y-4 p-6">

            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4"
              >

                <div className="space-y-3">
                  <div className="h-4 w-40 rounded bg-white/10" />
                  <div className="h-3 w-24 rounded bg-white/5" />
                </div>

                <div className="h-8 w-20 rounded-xl bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ================================================= */
  /* EMPTY STATE */
  /* ================================================= */

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-white/10 bg-white/[0.03] px-6 py-20 text-center">

        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-3xl">
          📂
        </div>

        <h3 className="text-xl font-semibold text-white">
          No data available
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
          There are currently no records to display in
          this table.
        </p>
      </div>
    );
  }

  /* ================================================= */
  /* MAIN TABLE */
  /* ================================================= */

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-2xl">

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[800px] border-collapse">

          {/* ================================================= */}
          {/* TABLE HEAD */}
          {/* ================================================= */}

          <thead className="border-b border-white/10 bg-white/[0.02]">

            <tr>

              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`
                    px-6 py-5 text-left
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-zinc-500
                    ${col.className || ''}
                  `}
                >
                  {col.label}
                </th>
              ))}

              {actions && actions.length > 0 && (
                <th className="px-6 py-5 text-right text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* ================================================= */}
          {/* TABLE BODY */}
          {/* ================================================= */}

          <tbody>

            {data.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick?.(row)}
                className={`
                  group
                  border-b border-white/[0.05]
                  transition-all duration-300

                  ${
                    onRowClick
                      ? `
                        cursor-pointer
                        hover:bg-white/[0.03]
                      `
                      : ''
                  }
                `}
              >

                {/* CELLS */}
                {columns.map((col) => (
                  <td
                    key={`${idx}-${col.key}`}
                    className={`
                      px-6 py-5
                      text-sm
                      text-zinc-300
                      ${col.className || ''}
                    `}
                  >
                    <div className="flex items-center gap-3">

                      {row[col.key]}

                    </div>
                  </td>
                ))}

                {/* ACTIONS */}
                {actions && actions.length > 0 && (
                  <td className="px-6 py-5">

                    <div className="flex items-center justify-end gap-2">

                      {actions.map((action, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                          className={`
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            px-4 py-2
                            text-xs
                            font-medium
                            transition-all duration-300

                            ${
                              action.className
                                ? action.className
                                : `
                                  border-white/10
                                  bg-white/[0.03]
                                  text-zinc-300
                                  hover:bg-white/[0.08]
                                  hover:text-white
                                `
                            }
                          `}
                        >

                          {action.icon}

                          {action.label}
                        </button>
                      ))}

                      {/* OPTIONAL MENU ICON */}
                      <button
                        className="
                          rounded-xl
                          border border-white/10
                          bg-white/[0.03]
                          p-2
                          text-zinc-500
                          transition-all duration-300
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        <MoreHorizontal size={15} />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <div className="flex flex-col gap-4 border-t border-white/10 bg-white/[0.02] px-6 py-4 md:flex-row md:items-center md:justify-between">

        <div className="text-sm text-zinc-500">
          Showing{' '}
          <span className="font-medium text-zinc-300">
            {data.length}
          </span>{' '}
          entries
        </div>

        {/* PAGINATION MOCKUP */}
        <div className="flex items-center gap-2">

          <button
            className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-2
              text-sm text-zinc-400
              transition-all duration-300
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            Previous
          </button>

          <button
            className="
              rounded-xl
              border border-pink-500/20
              bg-pink-500/10
              px-4 py-2
              text-sm font-medium text-pink-400
            "
          >
            1
          </button>

          <button
            className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-2
              text-sm text-zinc-400
              transition-all duration-300
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            2
          </button>

          <button
            className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-2
              text-sm text-zinc-400
              transition-all duration-300
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}