import AdminSidebar from '@/src/components/admin/Sidebar';

export const metadata = {
  title: 'Admin Panel - Beyond the Shake',
  description: 'Admin dashboard for Beyond the Shake platform',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-light">
      <AdminSidebar />
      <main className="flex-1 md:ml-0">
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
