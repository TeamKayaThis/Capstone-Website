import AdminSidebar from '@/src/components/admin/Sidebar';

export const metadata = {
  title: 'Admin Panel - Nginig',
  description: 'Admin dashboard for Nginig platform',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-hidden bg-black text-white">

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside className="hidden border-r border-white/10 bg-zinc-950 md:flex md:w-[270px] md:flex-col">

        <AdminSidebar />

      </aside>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <main className="flex-1 overflow-y-auto bg-black">

        {/* BACKGROUND EFFECTS */}
        <div className="fixed inset-0 -z-10 overflow-hidden">

          {/* TOP GLOW */}
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/5 blur-3xl" />

          {/* BOTTOM GLOW */}
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />

          {/* GRID OVERLAY */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* PAGE CONTENT */}
        <div className="relative z-10 min-h-screen p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}