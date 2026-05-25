"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

import FeatureSection from "../components/featureselection/FeatureSelection";

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);

  const myDrafts = [
    { id: 1, title: "Concept Frames" },
    { id: 2, title: "Storyboard Flow" },
    { id: 3, title: "Animation Tests" },
    { id: 4, title: "Final Render" },
  ];

  /* ================= ESC CLOSE ================= */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowTrailer(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  
    return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      <Navbar />

      {/* ================================================= */}
      {/* CINEMATIC BACKGROUND */}
      {/* ================================================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* base */}
        <div className="absolute inset-0 bg-black" />

        {/* grid */}
        <div
          className="
            absolute inset-0 opacity-[0.04]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        {/* glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-red-500/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-500/10 blur-[220px]" />

        {/* noise */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-black/50" />

      </div>

{/* ================================================= */}
{/* HERO */}
{/* ================================================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* 2.5D BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden">

    <img
      src="/hero/nginig.png"
      alt="NGINIG Hero"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        scale-105
        opacity-80
      "
    />

{/* cinematic overlay */}
<div className="
  absolute inset-0
  w-full h-full
  object-cover
  object-center
  scale-110
  opacity-80
" />

{/* soft gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

  </div>

  {/* floating particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-white/10 blur-sm animate-pulse" />

    <div className="absolute top-[35%] right-[18%] w-3 h-3 rounded-full bg-red-400/10 blur-sm animate-pulse" />

    <div className="absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-white/10 blur-sm animate-pulse" />

  </div>

  {/* CONTENT */}
  <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">

    {/* top text */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        uppercase tracking-[0.55em]
        text-zinc-500
        text-[10px] md:text-xs
        mb-8
      "
    >
      A 2.5D CINEMATIC EXPERIENCE
    </motion.p>

    {/* title */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="
        text-[4rem]
        sm:text-[6rem]
        md:text-[8rem]
        lg:text-[10rem]
        font-black
        tracking-[0.14em]
        leading-none
      "
    >
      <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
        NGINIG
      </span>
    </motion.h1>

    {/* divider */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1 }}
      className="
        w-40 h-[1px]
        bg-gradient-to-r
        from-transparent
        via-red-500
        to-transparent
        mx-auto my-10
      "
    />

    {/* description */}
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
      className="
        text-zinc-300
        max-w-3xl
        mx-auto
        text-base md:text-xl
        leading-8
      "
    >
      Some memories should remain buried.
      Some doors were never meant to be opened.
      Fear begins where reality starts to distort.
    </motion.p>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap gap-5 justify-center mt-14"
    >

      {/* trailer */}
      <button
        onClick={() => setShowTrailer(true)}
        className="
          group
          relative
          overflow-hidden
          px-8 py-4 rounded-full
          bg-white text-black
          font-semibold
          hover:scale-105
          transition duration-300
        "
      >

        <span className="relative z-10">
          Watch Trailer
        </span>

        <div className="
          absolute inset-0
          bg-gradient-to-r
          from-red-500 to-red-400
          opacity-0
          group-hover:opacity-100
          transition duration-300
        " />

      </button>

      {/* story */}
      <Link
        href="/story"
        className="
          px-8 py-4 rounded-full
          border border-white/10
          bg-white/[0.05]
          backdrop-blur-xl
          hover:bg-white/10
          transition duration-300
        "
      >
        Enter Story
      </Link>

    </motion.div>

    {/* bottom indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="mt-24 flex flex-col items-center"
    >

      <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-4">
        Scroll To Explore
      </p>

      <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />

    </motion.div>

  </div>

</section>

      {/* ================================================= */}
      {/* PORTAL SECTION */}
      {/* ================================================= */}
      <section className="relative py-32 md:py-44 px-6 md:px-14 overflow-hidden">

        {/* bg text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[16vw] font-black text-white/[0.02] tracking-[-0.08em]">
            PORTAL
          </h1>

        </div>

        {/* atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[180px]" />

        <div className="relative z-10 max-w-[1600px] mx-auto">

          {/* HEADER */}
          <div className="flex flex-col xl:flex-row xl:justify-between gap-12 mb-20">

            <div className="max-w-4xl">

              <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-8">
                EXPERIENCE PORTALS
              </p>

              <h2 className="
                text-5xl
                md:text-7xl
                font-black
                leading-[0.95]
              ">

                Enter the <br />

                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                  fragmented archive.
                </span>

              </h2>

            </div>

            <div className="max-w-lg xl:pt-16">

              <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-8" />

              <p className="text-zinc-400 leading-8 text-lg">
                Enter fragmented archives,
                unfamiliar spaces, and cinematic memories
                buried beneath perception.
              </p>

            </div>

          </div>

          {/* MAIN GRID */}
          <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-8">

            {/* ================================================= */}
            {/* STORY PANEL */}
            {/* ================================================= */}
            <Link href="/story">

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  relative
                  h-[650px] md:h-[760px]
                  rounded-[40px]
                  overflow-hidden
                  border border-white/10
                  bg-white/[0.03]
                  cursor-pointer
                "
              >

                {/* IMAGE */}
                <img
                  src="/contents/5.png"
                  alt="story"
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    object-center
                    opacity-80
                    group-hover:scale-105
                    transition duration-[2000ms]
                  "
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                {/* top info */}
                <div className="absolute top-8 left-8 z-20">

                  <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-400 mb-5">
                    STORY ARCHIVE
                  </p>

                  <h3 className="
                    text-5xl
                    md:text-7xl
                    font-black
                    leading-none
                  ">
                    STORY
                  </h3>

                </div>

                {/* side code */}
                <div className="absolute right-8 top-8 z-20 hidden md:flex flex-col items-end">

                  <span className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
                    FILE_01
                  </span>

                  <span className="text-zinc-600 text-sm mt-2">
                    perception.log
                  </span>

                </div>

                {/* bottom */}
                <div className="absolute bottom-10 left-10 z-20 max-w-xl">

                  <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-6" />

                  <p className="text-xl md:text-2xl font-light leading-[1.5] text-zinc-100">
                    “Not everything seen can be explained.”
                  </p>

                  <div className="mt-8 flex items-center gap-4">

                    <div className="
                      w-12 h-12
                      rounded-full
                      border border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      flex items-center justify-center
                    ">
                      →
                    </div>

                    <p className="uppercase tracking-[0.3em] text-[11px] text-zinc-400">
                      Enter Story Archive
                    </p>

                  </div>

                </div>

              </motion.div>

            </Link>

            {/* ================================================= */}
            {/* RIGHT STACK */}
            {/* ================================================= */}
            <div className="flex flex-col gap-8">

              {/* CHARACTERS */}
              <Link href="/characters">

                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    h-[420px]
                    rounded-[36px]
                    overflow-hidden
                    border border-white/10
                    bg-white/[0.03]
                    cursor-pointer
                  "
                >

                  {/* IMAGE */}
                  <img
                    src="/character/adrian.png"
                    alt="characters"
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      object-top
                      opacity-90
                      scale-100
                      group-hover:scale-105
                      transition duration-[1800ms]
                    "
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                  {/* title */}
                  <div className="absolute top-8 left-8 z-20">

                    <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-400 mb-4">
                      CHARACTER DOSSIER
                    </p>

                    <h3 className="
                      text-4xl
                      md:text-5xl
                      font-black
                      leading-none
                    ">
                      CHARACTERS
                    </h3>

                  </div>

                  {/* description */}
                  <div className="absolute bottom-8 left-8 z-20 max-w-sm">

                    <div className="w-20 h-[1px] bg-gradient-to-r from-blue-500 to-transparent mb-5" />

                    <p className="text-zinc-300 text-base md:text-lg leading-7">
                      Unknown figures, silent observers,
                      and identities lost within memory.
                    </p>

                  </div>

                </motion.div>

              </Link>

              {/* INFO CARDS */}
              <div className="grid md:grid-cols-2 gap-6">

                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-7
                  "
                >

                  <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-red-500/10 blur-[90px]" />

                  <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-5">
                    SYSTEM_01
                  </p>

                  <h4 className="text-xl font-bold mb-4">
                    Signal Loss
                  </h4>

                  <p className="text-zinc-400 leading-7">
                    Perception bends through fragmented memories and silence.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-7
                  "
                >

                  <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-blue-500/10 blur-[90px]" />

                  <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-5">
                    SYSTEM_02
                  </p>

                  <h4 className="text-xl font-bold mb-4">
                    Distortion Layer
                  </h4>

                  <p className="text-zinc-400 leading-7">
                    Fear reshapes reality through cinematic distortion.
                  </p>

                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FEATURE */}
      {/* ================================================= */}
      <section className="px-6 md:px-14 py-10">

        <div className="
          max-w-[1600px]
          mx-auto
          rounded-[36px]
          overflow-hidden
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        ">

          <FeatureSection
            title="Reality is not broken. Perception is."
            imageUrl="/feature/feature.gif"
          >

            <p className="text-zinc-300 text-lg leading-8">
              NGINIG blurs the boundary between memory,
              fear, and perception through immersive
              cinematic storytelling.
            </p>

          </FeatureSection>

        </div>

      </section>

      {/* ================================================= */}
      {/* ARCHIVE */}
      {/* ================================================= */}
      <section className="relative py-32 px-6 md:px-14 overflow-hidden">

        {/* bg text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[16vw] font-black text-white/[0.03] select-none">
            ARCHIVE
          </h1>

        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">

          <p className="uppercase tracking-[0.6em] text-zinc-500 text-[10px] mb-8">
            CASE FILES
          </p>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-16
            leading-none
          ">

            Fragments from <br />
            production.

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {myDrafts.map((item) => (

              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="
                  p-8
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:bg-white/[0.05]
                  transition duration-300
                "
              >

                <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-5">
                  FILE_{item.id}
                </p>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <section className="relative py-32 text-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[18vw] font-black text-white/[0.02] select-none">
            END
          </h1>

        </div>

        <div className="relative z-10 px-6">

          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8" />

          <h2 className="
            text-4xl
            md:text-6xl
            font-black
            leading-tight
          ">

            Beyond perception. <br />
            Beyond memory.

          </h2>

          <p className="mt-10 text-[10px] tracking-[0.6em] uppercase text-zinc-600">
            NGINIG / FILM ARCHIVE
          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* TRAILER MODAL */}
      {/* ================================================= */}
      {showTrailer && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        >

          {/* backdrop */}
          <div
            onClick={() => setShowTrailer(false)}
            className="absolute inset-0 bg-black/90"
          />

          {/* glow */}
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-[180px]" />

          </div>

          {/* video */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
              relative
              w-full
              max-w-5xl
              aspect-video
              rounded-[28px]
              overflow-hidden
              border border-white/10
            "
          >

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tEs08eC0GJE?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />

          </motion.div>

          {/* esc */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

            <div className="
              flex items-center gap-3
              px-5 py-3
              rounded-full
              bg-white/10
              border border-white/10
              backdrop-blur-xl
            ">

              <span className="
                px-2 py-1
                rounded-md
                bg-white
                text-black
                text-[10px]
                font-bold
              ">
                ESC
              </span>

              <span className="text-xs tracking-[0.3em] uppercase text-zinc-300">
                Exit Trailer
              </span>

            </div>

          </div>

        </motion.div>

      )}

    </main>
  );
}