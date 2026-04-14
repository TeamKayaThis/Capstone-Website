import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Beyond the Shake',
  description:
    'Conveying Life beyond Epilepsy through 2.5D Film Animated Storytelling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="...">
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add this right before the closing body tag */}
      </body>
    </html>
  );
}
