import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import AppShell from "./AppShell";

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nginig",
  description:
    "Conveying Life beyond Epilepsy through 2.5D Film Animated Storytelling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          min-h-screen
          bg-zinc-950 text-zinc-100
          ${geistSans.variable} ${geistMono.variable}
          overflow-x-hidden overflow-y-auto
        `}
      >

        {/* BACKGROUND LAYERS */}
        <div className="fixed inset-0 -z-20 bg-zinc-950" />
        <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

        {/* APP WRAPPER */}
        <AppShell>
          {children}
        </AppShell>

      </body>
    </html>
  );
}