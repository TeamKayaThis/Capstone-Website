"use client";

import { useEffect, useState } from "react";

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
 subtitle?: string;
}) {
  const [glitch, setGlitch] = useState(false);

  // subtle glitch pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);

      setTimeout(() => {
        setGlitch(false);
      }, 120);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[72vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-zinc-950 pb-24">

      {/* BACKGROUND BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950" />

      {/* ATMOSPHERE LIGHT */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* RED CINEMATIC GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-red-500/10 blur-3xl rounded-full top-1/4 animate-pulse" />

      {/* FILM GRAIN / SCANLINE */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_bottom,transparent_96%,rgba(255,255,255,0.08))] bg-[length:100%_5px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl pt-10">

        {/* SMALL TOP LABEL */}
        <p className="text-zinc-600 text-xs tracking-[0.5em] mb-8 uppercase">
          TKT Studios • Interactive Film Experience
        </p>

        {/* TITLE */}
        <h1
          className={`
            text-6xl md:text-[7rem]
            font-black
            tracking-[0.25em]
            leading-none
            uppercase
            transition-all duration-150
            ${glitch ? "opacity-70 translate-x-[2px]" : "opacity-100"}
          `}
        >
          {title}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="mt-8 text-base md:text-xl text-zinc-400 leading-8 max-w-3xl mx-auto uppercase tracking-[0.2em]">
            {subtitle}
          </p>
        )}

        {/* BOTTOM TEXT */}
        <div className="mt-14 flex items-center justify-center gap-6 text-zinc-600 text-xs tracking-[0.3em] uppercase">

          <span>Psychological</span>

          <div className="w-1 h-1 rounded-full bg-zinc-700" />

          <span>2.5D Animated Film</span>

          <div className="w-1 h-1 rounded-full bg-zinc-700" />

          <span>Cinematic Narrative</span>

        </div>

      </div>
    </section>
  );
}