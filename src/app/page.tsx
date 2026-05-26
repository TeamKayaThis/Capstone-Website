"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);

  /* ================================================= */
  /* FEEDBACK DATA */
  /* ================================================= */
  const feedbacks = [
    {
      id: 1,
      name: "Anonymous Viewer",
      role: "Student Viewer",
      feedback:
        "The atmosphere felt unsettling in the best way possible. Every scene felt like reality was slowly collapsing.",
    },
    {
      id: 2,
      name: "Film Critic",
      role: "Audience Reaction",
      feedback:
        "NGINIG blends memory and fear into a cinematic experience that stays in your head long after watching.",
    },
    {
      id: 3,
      name: "Campus Audience",
      role: "Early Screening",
      feedback:
        "The visual distortion and sound design created genuine tension. It felt immersive and disturbing.",
    },
    {
      id: 4,
      name: "Anonymous Viewer",
      role: "Psychological Horror Fan",
      feedback:
        "It doesn't rely on jump scares. The fear comes from confusion, silence, and perception itself.",
    },
  ];

  const [activeFeedback, setActiveFeedback] = useState(0);

  const myDrafts = [
    { id: 1, title: "Concept Frames" },
    { id: 2, title: "Storyboard Flow" },
    { id: 3, title: "Animation Tests" },
    { id: 4, title: "Final Render" },
  ];

  /* ================================================= */
  /* ESC CLOSE */
  /* ================================================= */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowTrailer(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* ================================================= */
  /* AUTO CAROUSEL */
  /* ================================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeedback((prev) =>
        prev === feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* ================================================= */}
      {/* CINEMATIC BACKGROUND */}
      {/* ================================================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <div
          className="
            absolute inset-0 opacity-[0.04]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-red-500/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================================================= */}
{/* HERO */}
{/* ================================================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/hero/nginig.png"
      alt="NGINIG Hero"
      className="absolute inset-0 w-full h-full object-cover scale-105 opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/90" />
  </div>

  {/* particles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[25%] left-[18%] w-2 h-2 bg-white/10 rounded-full blur-sm animate-pulse" />
    <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-red-400/10 rounded-full blur-sm animate-pulse" />
    <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full blur-sm animate-pulse" />
  </div>

  {/* CONTENT (MOVED DOWN) */}
  <div className="relative z-20 text-center px-6 max-w-5xl mx-auto translate-y-10 md:translate-y-14 lg:translate-y-16">

    {/* subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="uppercase tracking-[0.5em] text-zinc-500 text-[11px] md:text-xs mb-8"
    >
      A 2.5D ANIMATION FILM
    </motion.p>

    {/* title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-black leading-[0.85]"
    >
      <span
        className="
          block
          text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem]
          tracking-[0.08em]
          bg-gradient-to-b from-white via-zinc-200 to-zinc-600
          bg-clip-text text-transparent
        "
      >
        NGINIG
      </span>
    </motion.h1>

    {/* divider */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="w-28 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-10"
    />

    {/* description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-zinc-300 text-base md:text-lg leading-8 max-w-2xl mx-auto"
    >
      Some memories should remain buried. Some doors were never meant to be opened.
      Fear begins where reality starts to distort.
    </motion.p>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-wrap justify-center gap-5 mt-12"
    >

      <button
        onClick={() => setShowTrailer(true)}
        className="
          relative overflow-hidden
          px-8 py-4
          min-w-[180px]
          rounded-full
          bg-white text-black
          font-semibold
          transition duration-300
          hover:scale-105
        "
      >
        <span className="relative z-10">Watch Trailer</span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 hover:opacity-100 transition" />
      </button>

      <Link
        href="/story"
        className="
          flex items-center justify-center
          px-8 py-4
          min-w-[180px]
          rounded-full
          border border-white/15
          bg-white/5
          backdrop-blur-xl
          text-white
          transition duration-300
          hover:bg-white/10
        "
      >
        Enter Story
      </Link>

    </motion.div>

    {/* scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-20 flex flex-col items-center"
    >
      <p className="text-[10px] tracking-[0.4em] text-zinc-600 mb-3">
        SCROLL TO EXPLORE
      </p>
      <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent" />
    </motion.div>

  </div>
</section>



      {/* ================================================= */}
      {/* PORTAL SECTION */}
      {/* ================================================= */}
      <section className="relative py-32 md:py-44 px-6 md:px-14 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[16vw] font-black text-white/[0.02] tracking-[-0.08em]">
            PORTAL
          </h1>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[180px]" />

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:justify-between gap-12 mb-20">
            <div className="max-w-4xl">
              <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-8">
                EXPERIENCE PORTALS
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
                Enter the <br />

                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                  fragmented archive.
                </span>
              </h2>
            </div>

            <div className="max-w-lg xl:pt-16">
              <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-8" />

              <p className="text-zinc-400 leading-8 text-lg">
                Enter fragmented archives, unfamiliar spaces, and cinematic
                memories buried beneath perception.
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-8">
            {/* STORY PANEL */}
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                <div className="absolute top-8 left-8 z-20">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-400 mb-5">
                    STORY ARCHIVE
                  </p>

                  <h3 className="text-5xl md:text-7xl font-black leading-none">
                    STORY
                  </h3>
                </div>

                <div className="absolute bottom-10 left-10 z-20 max-w-xl">
                  <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-6" />

                  <p className="text-xl md:text-2xl font-light leading-[1.5] text-zinc-100">
                    “Not everything seen can be explained.”
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* RIGHT */}
            <div className="flex flex-col gap-8">
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
                  <img
                    src="/character/adrian.png"
                    alt="characters"
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      object-top
                      opacity-90
                      group-hover:scale-105
                      transition duration-[1800ms]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                  <div className="absolute top-8 left-8 z-20">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-400 mb-4">
                      CHARACTER DOSSIER
                    </p>

                    <h3 className="text-4xl md:text-5xl font-black leading-none">
                      CHARACTERS
                    </h3>
                  </div>

                  <div className="absolute bottom-8 left-8 z-20 max-w-sm">
                    <div className="w-20 h-[1px] bg-gradient-to-r from-blue-500 to-transparent mb-5" />

                    <p className="text-zinc-300 text-base md:text-lg leading-7">
                      Unknown figures, silent observers, and identities lost
                      within memory.
                    </p>
                  </div>
                </motion.div>
              </Link>

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

                  <h4 className="text-xl font-bold mb-4">Signal Loss</h4>

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
      {/* AUDIENCE FEEDBACK CAROUSEL */}
      {/* ================================================= */}
      <section className="relative py-32 px-6 md:px-14 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[15vw] font-black text-white/[0.02]">
            VOICES
          </h1>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.6em] text-zinc-500 text-[10px] mb-8">
            AUDIENCE REACTIONS
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-16">
            What viewers <br />
            experienced.
          </h2>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 min-h-[360px] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-red-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={feedbacks[activeFeedback].id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-4xl"
              >
                <div className="text-7xl text-white/10 mb-6">“</div>

                <p className="text-xl md:text-3xl leading-[1.8] text-zinc-200 font-light">
                  {feedbacks[activeFeedback].feedback}
                </p>

                <div className="mt-10">
                  <h4 className="text-lg font-semibold">
                    {feedbacks[activeFeedback].name}
                  </h4>

                  <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase mt-2">
                    {feedbacks[activeFeedback].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* indicators */}
          <div className="flex justify-center gap-4 mt-10">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeedback(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeFeedback === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ARCHIVE */}
      {/* ================================================= */}
      <section className="relative py-32 px-6 md:px-14 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[16vw] font-black text-white/[0.03] select-none">
            ARCHIVE
          </h1>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <p className="uppercase tracking-[0.6em] text-zinc-500 text-[10px] mb-8">
            CASE FILES
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-16 leading-none">
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

                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* ================================================= */}
{/* CINEMATIC SURVEY CTA (FIXED SIZE) */}
{/* ================================================= */}
<section className="relative py-32 md:py-36 px-6 md:px-14 overflow-hidden">

  {/* background text */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1 className="text-[16vw] font-black text-white/[0.02] select-none">
      PERCEPTION
    </h1>
  </div>

  {/* glow */}
  <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[160px]" />
  <div className="absolute bottom-[-25%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />

  <div className="relative z-10 max-w-[1400px] mx-auto">

    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
      "
    >

      <div className="grid xl:grid-cols-[1.1fr_0.9fr] min-h-[520px]">

        {/* LEFT */}
        <div className="relative p-10 md:p-14 flex flex-col justify-center">

          <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-6">
            AUDIENCE PERCEPTION SURVEY
          </p>

          <h2 className="text-4xl md:text-6xl xl:text-6xl font-black leading-[0.95]">
            What did <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              you truly see?
            </span>
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent my-8" />

          <p className="text-zinc-400 text-base md:text-lg leading-7 max-w-xl">
            Every viewer experiences NGINIG differently.
            Some see fear. Some see memory.
            Others question reality itself.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => setShowSurvey(true)}
              className="
                px-8 py-4
                rounded-full
                bg-white text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Enter Survey
            </button>

            <button
              onClick={() => setShowTrailer(true)}
              className="
                px-8 py-4
                rounded-full
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              Watch Trailer
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative hidden xl:flex items-center justify-center">

          <img
            src="/hero/nginig.png"
            alt="NGINIG Survey"
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative z-20
              w-[320px]
              rounded-[24px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-7
            "
          >

            <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-5">
              VIEWER RESPONSE
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-xs text-zinc-500 mb-2">Emotional Impact</p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[91%] h-full bg-red-500 rounded-full" />
                </div>
              </div>

              <div>
                <p className="text-xs text-zinc-500 mb-2">Psychological Tension</p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-white rounded-full" />
                </div>
              </div>

              <div>
                <p className="text-xs text-zinc-500 mb-2">Curiosity</p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-blue-500 rounded-full" />
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  </div>
</section>

{/* ================================================= */}
{/* SURVEY MODAL (IMPROVED) */}
{/* ================================================= */}
{showSurvey && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[999] flex items-center justify-center p-4"
  >
    {/* BACKDROP */}
    <div
      onClick={() => setShowSurvey(false)}
      className="absolute inset-0 bg-black/90 backdrop-blur-sm"
    />

    {/* GLOW */}
    <div className="absolute top-[15%] left-[15%] w-[500px] h-[500px] bg-red-500/20 blur-[160px]" />
    <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[180px]" />

    {/* MODAL */}
    <motion.div
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        relative z-10
        w-full max-w-3xl
        h-[85vh]
        overflow-hidden
        rounded-[34px]
        border border-white/10
        bg-[#0b0b0b]
        backdrop-blur-2xl
        flex flex-col
      "
    >
      {/* HEADER (sticky) */}
      <div className="sticky top-0 z-20 bg-[#0b0b0b]/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-10 py-6">
        <button
          onClick={() => setShowSurvey(false)}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/60 hover:bg-white/10 transition"
        >
          ✕
        </button>

        <p className="text-[10px] tracking-[0.6em] uppercase text-zinc-500 mb-3">
          TRAILER RESPONSE SURVEY
        </p>

        <h2 className="text-3xl md:text-5xl font-black leading-tight">
          What did you{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
            truly perceive?
          </span>
        </h2>

        {/* simple progress feel (visual only) */}
        <div className="mt-6 h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-gradient-to-r from-red-500 to-blue-500" />
        </div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-12 custom-scroll">

        {/* Q1 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            1. What emotion did you feel the most?
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {["Fear", "Confusion", "Curiosity", "Anxiety", "Tension", "Sadness"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06] cursor-pointer transition"
              >
                <input type="radio" name="emotion" className="accent-red-500" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q2 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            2. Did the trailer feel psychologically disturbing?
          </p>

          <div className="flex flex-wrap gap-3">
            {["Yes", "No", "Somewhat"].map((item) => (
              <label
                key={item}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition flex items-center gap-2"
              >
                <input type="radio" name="disturbing" className="accent-blue-500" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Q3 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            3. Which part affected you the most?
          </p>

          <textarea
            rows={4}
            placeholder="Describe the scene, sound, or moment..."
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none resize-none text-white placeholder:text-zinc-600 focus:border-white/30 transition"
          />
        </div>

        {/* Q4 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            4. Did the visuals distort reality?
          </p>

          <select
            className="
              w-full
              rounded-2xl
              border border-white/10
              bg-white/[0.9]
              text-black
              px-5 py-4
              outline-none
              focus:ring-2 focus:ring-red-500/30
            "
          >
            <option className="text-black">Strongly Agree</option>
            <option className="text-black">Agree</option>
            <option className="text-black">Neutral</option>
            <option className="text-black">Disagree</option>
            <option className="text-black">Strongly Disagree</option>
          </select>
        </div>

        {/* Q5 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            5. How immersive was the sound design?
          </p>

          <div className="flex flex-wrap gap-3">
            {["Very Immersive", "Immersive", "Average", "Weak"].map((item) => (
              <label
                key={item}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition flex items-center gap-2"
              >
                <input type="radio" name="sound" className="accent-white" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Q6 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            6. What do you think it symbolizes?
          </p>

          <textarea
            rows={5}
            placeholder="Share your interpretation..."
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none resize-none text-white placeholder:text-zinc-600 focus:border-white/30 transition"
          />
        </div>

        {/* Q7 */}
        <div>
          <p className="text-lg font-semibold mb-5">
            7. Would you watch the full film?
          </p>

          <div className="flex flex-wrap gap-3">
            {["Definitely", "Maybe", "Not Sure", "Probably Not"].map((item) => (
              <label
                key={item}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition flex items-center gap-2"
              >
                <input type="radio" name="watchfull" className="accent-red-500" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="border-t border-white/10 px-6 md:px-10 py-6 flex flex-wrap gap-4">
        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
          Submit Response
        </button>

        <button
          onClick={() => setShowSurvey(false)}
          className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
)}


      {/* ================================================= */}
      {/* TRAILER MODAL */}
      {/* ================================================= */}
      {showTrailer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        >
          <div
            onClick={() => setShowTrailer(false)}
            className="absolute inset-0 bg-black/90"
          />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-[180px]" />
          </div>

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

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div
              className="
                flex items-center gap-3
                px-5 py-3
                rounded-full
                bg-white/10
                border border-white/10
                backdrop-blur-xl
              "
            >
              <span
                className="
                  px-2 py-1
                  rounded-md
                  bg-white
                  text-black
                  text-[10px]
                  font-bold
                "
              >
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