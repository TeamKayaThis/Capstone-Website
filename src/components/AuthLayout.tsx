export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white bg-black">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* BASE DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0b0b12] to-black" />

        {/* CINEMATIC RED GLOW (FOCAL EMOTION) */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-500/20 blur-[220px] animate-pulse" />

        {/* SECONDARY DEPTH GLOW */}
        <div className="absolute bottom-[-30%] right-[-15%] w-[900px] h-[900px] bg-blue-500/10 blur-[240px]" />

        {/* SOFT WHITE AMBIENT LIGHT */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-white/5 blur-[180px]" />

        {/* FILM GRAIN */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-overlay" />

        {/* VIGNETTE (FIXED - no invalid tailwind gradient) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* ================= FLOATING LIGHT MOVEMENT ================= */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-[120%] h-[120%] animate-[spin_60s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-md px-6">
        {children}
      </div>

    </div>
  );
}