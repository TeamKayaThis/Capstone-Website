export default function InfoCard({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative
        rounded-[32px]
        border border-white/10
        bg-zinc-900/70
        overflow-hidden
        group
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-zinc-900
        ${className}
      `}
    >

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 p-8 md:p-10">

        {/* SMALL LABEL */}
        {subtitle && (
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-4">
            {subtitle}
          </p>
        )}

        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-white leading-tight">
          {title}
        </h3>

        {/* SEPARATOR */}
        <div className="mt-5 w-12 h-[2px] bg-red-500/70 group-hover:w-20 transition-all duration-500" />

        {/* BODY */}
        <div className="mt-6 text-sm md:text-base text-zinc-400 leading-7">
          {children}
        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

    </div>
  );
}