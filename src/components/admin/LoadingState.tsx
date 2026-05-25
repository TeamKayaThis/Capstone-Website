'use client';

export interface LoadingStateProps {
  rows?: number;
  cards?: boolean;
}

export default function LoadingState({
  rows = 5,
  cards = false,
}: LoadingStateProps) {

  /* ================================================= */
  /* CARD LOADING */
  /* ================================================= */

  if (cards) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-2xl
            "
          >

            {/* SHIMMER */}
            <div className="absolute inset-0 animate-pulse">

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="space-y-5">

              <div className="flex items-start justify-between">

                <div className="space-y-3">

                  <div className="h-3 w-24 rounded-full bg-white/10" />

                  <div className="h-10 w-20 rounded-xl bg-white/10" />
                </div>

                <div className="h-14 w-14 rounded-2xl bg-white/10" />
              </div>

              <div className="h-3 w-32 rounded-full bg-white/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ================================================= */
  /* TABLE / LIST LOADING */
  /* ================================================= */

  return (
    <div
      className="
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        shadow-2xl
        backdrop-blur-2xl
      "
    >

      {/* HEADER */}
      <div className="border-b border-white/10 px-6 py-5">

        <div className="flex items-center justify-between">

          <div className="space-y-3">

            <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />

            <div className="h-3 w-24 animate-pulse rounded-full bg-white/5" />
          </div>

          <div className="h-10 w-28 animate-pulse rounded-2xl bg-white/10" />
        </div>
      </div>

      {/* ROWS */}
      <div className="divide-y divide-white/[0.05]">

        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="
              flex flex-col gap-4
              px-6 py-5
              md:flex-row md:items-center md:justify-between
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* AVATAR */}
              <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/10" />

              {/* TEXT */}
              <div className="space-y-3">

                <div className="h-4 w-44 animate-pulse rounded-full bg-white/10" />

                <div className="h-3 w-28 animate-pulse rounded-full bg-white/5" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <div className="h-9 w-20 animate-pulse rounded-xl bg-white/10" />

              <div className="h-9 w-20 animate-pulse rounded-xl bg-white/5" />
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 px-6 py-4">

        <div className="h-3 w-32 animate-pulse rounded-full bg-white/5" />
      </div>
    </div>
  );
}