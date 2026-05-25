'use client';

import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <footer
      ref={ref}
      className={`relative overflow-hidden border-t border-white/10 bg-black transition-all duration-1000
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-20 left-1/4 w-[300px] h-[300px] bg-red-500/10 blur-[120px]" />

        <div className="absolute -bottom-32 right-1/4 w-[320px] h-[320px] bg-blue-500/10 blur-[140px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]"
        />

      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 py-14">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-14">

          {/* LEFT */}
          <div
            className={`transition-all duration-1000 delay-100
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >

            <p className="text-[10px] tracking-[0.6em] uppercase text-zinc-500 mb-5">
              TKT STUDIO
            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tight">

              NGINIG

            </h2>

            <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent my-6" />

            <p className="max-w-md text-zinc-400 leading-7 text-sm md:text-base">
              A cinematic 2.5D animated experience exploring
              fragmented perception, fear, and emotional realities
              through immersive visual storytelling.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className={`flex flex-col md:items-end justify-between transition-all duration-1000 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >

            <div className="space-y-3">
              <p className="text-zinc-200 text-lg">
                tktstudios.com
              </p>

              <p className="text-zinc-500 text-sm">
                National University — 2026
              </p>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8 md:mt-12">

              <a
                href="#"
                className="
                  w-11 h-11 rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11 rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11 rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <FaEnvelope size={14} />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.3em] uppercase text-zinc-600 transition-all duration-1000 delay-500
          ${visible ? "opacity-100" : "opacity-0"}
          `}
        >

          <p>
            NGINIG — A Capstone 2.5D Animation Film
          </p>

          <p>
            © 2026 ALL RIGHTS RESERVED
          </p>

        </div>

      </div>
    </footer>
  );
}