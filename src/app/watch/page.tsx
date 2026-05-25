"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WatchPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* RED GLOW */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/10 blur-[140px]" />

        {/* WHITE GLOW */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[160px]" />

        {/* FILM GRAIN */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative px-4 md:px-10 pt-40 pb-20">

        <div className="max-w-7xl mx-auto">

          {/* TOP LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-6"
          >
            Watch Film
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black tracking-[0.15em] leading-none"
          >
            NGINIG
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-zinc-400 text-lg leading-8 mt-8"
          >
            A 2.5D animated film exploring
            distorted perception, emotional fear,
            fragmented memory, and the unseen realities
            of living beyond silence.
          </motion.p>

        </div>

      </section>

      {/* ================================================= */}
      {/* VIDEO SECTION */}
      {/* ================================================= */}

      <section className="px-4 md:px-10 pb-28">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            overflow-hidden
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            shadow-[0_0_120px_rgba(255,255,255,0.03)]
          "
        >

          {/* VIDEO */}
          <div className="relative aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&rel=0"
              title="NGINIG Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* OVERLAY */}
            <div className="pointer-events-none absolute inset-0 border border-white/10" />

          </div>

        </motion.div>

      </section>

      {/* ================================================= */}
      {/* EXTRA INFO */}
      {/* ================================================= */}

      <section className="px-4 md:px-10 pb-32">

        <div className="max-w-5xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-8"
          >
            Fear Beyond Perception
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            “Reality is not broken. <br />
            Perception is.”
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >

            {/* BACK BUTTON */}
            <Link
              href="/"
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Back to Homepage
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className="
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Meet The Team
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}