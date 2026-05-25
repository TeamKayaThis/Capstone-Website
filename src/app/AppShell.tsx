'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // CHECK IF ADMIN PAGE
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <div className="relative flex flex-col min-h-screen">

      {/* SHOW ONLY ON WEBSITE PAGES */}
      {!isAdminPage && <Navbar />}

      {/* PAGE CONTENT */}
      <main className="flex-1 relative">
        {children}
      </main>

      {/* SHOW ONLY ON WEBSITE PAGES */}
      {!isAdminPage && <Footer />}

    </div>
  );
}