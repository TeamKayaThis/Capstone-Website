"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  /* ================================================= */
  /* SCROLL EFFECT */
  /* ================================================= */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /* blur navbar */
      setScrolled(currentScrollY > 20);

      /* always visible at top */
      if (currentScrollY < 80) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      /* scroll down = hide */
      if (currentScrollY > lastScrollY + 5) {
        setShowNavbar(false);
      }

      /* scroll up = show */
      if (currentScrollY < lastScrollY - 5) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================================================= */
  /* ESC CLOSE */
  /* ================================================= */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* ================================================= */
  /* LOCK BODY SCROLL */
  /* ================================================= */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ================================================= */
  /* NAV ITEMS */
  /* ================================================= */
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Story", href: "/story" },
    { label: "Characters", href: "/characters" },
    { label: "Team", href: "/about" },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[999]

          will-change-transform
          transform-gpu

          transition-all duration-500 ease-in-out

          ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }

          ${
            scrolled
              ? `
                bg-black/70
                backdrop-blur-2xl
                border-b border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.45)]
              `
              : "bg-transparent"
          }
        `}
      >
        {/* TOP RED LINE */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

        {/* ATMOSPHERE */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-150%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[180px]" />
        </div>

        {/* ================================================= */}
        {/* NAV CONTENT */}
        {/* ================================================= */}
        <nav className="relative z-10 h-20 px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* pulse */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 rounded-full bg-red-500/10 animate-ping" />

              <div className="absolute w-5 h-5 rounded-full bg-red-500/20 blur-md" />

              <div className="relative w-3 h-3 rounded-full bg-red-500 group-hover:scale-125 transition duration-300" />
            </div>

            {/* text */}
            <div className="flex flex-col leading-none">
              <span
                className="
                  text-white
                  uppercase
                  tracking-[0.4em]
                  text-sm md:text-base
                  font-black
                "
              >
                TKT STUDIO
              </span>

            </div>
          </Link>

          {/* ================================================= */}
          {/* DESKTOP NAV */}
          {/* ================================================= */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative
                  group
                  uppercase
                  tracking-[0.3em]
                  text-[12px]
                  text-white/60
                  hover:text-white
                  transition-all duration-300
                "
              >
                {item.label}

                {/* hover line */}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[1px]
                    w-0
                    bg-gradient-to-r
                    from-red-500
                    to-transparent
                    group-hover:w-full
                    transition-all duration-300
                  "
                />
              </Link>
            ))}
          </div>

          {/* ================================================= */}
          {/* RIGHT ACTIONS */}
          {/* ================================================= */}
          <div className="hidden md:flex items-center gap-4">
            {/* watch */}
            <Link
              href="/watch"
              className="
                group
                relative
                overflow-hidden
                px-7 py-3
                rounded-full
                bg-white
                text-black
                uppercase
                tracking-[0.25em]
                text-[11px]
                font-bold
                transition-all duration-300
                hover:scale-105
              "
            >
              <span className="relative z-10">
                Watch Film
              </span>

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-red-500
                  to-red-400
                  opacity-0
                  group-hover:opacity-100
                  transition duration-300
                "
              />
            </Link>

            {/* login */}
            <Link
              href="/login"
              className="
                px-7 py-3
                rounded-full
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                text-white/80
                uppercase
                tracking-[0.25em]
                text-[11px]
                transition-all duration-300
                hover:bg-white
                hover:text-black
                hover:scale-105
              "
            >
              Login
            </Link>
          </div>

          {/* ================================================= */}
          {/* MOBILE BUTTON */}
          {/* ================================================= */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              relative z-[70]
              w-12 h-12
              rounded-full
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              flex items-center justify-center
              text-white
            "
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 z-[998]
              bg-black/95
              backdrop-blur-2xl
              flex flex-col
              items-center justify-center
              overflow-hidden
            "
          >
            {/* bg word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1
                className="
                  text-[28vw]
                  font-black
                  text-white/[0.03]
                  tracking-[-0.08em]
                  select-none
                "
              >
                MENU
              </h1>
            </div>

            {/* glow */}
            <div
              className="
                absolute top-[-20%]
                left-1/2 -translate-x-1/2
                w-[700px] h-[700px]
                bg-red-500/10
                blur-[180px]
              "
            />

            {/* links */}
            <div className="relative z-10 flex flex-col items-center gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-2xl md:text-5xl
                      uppercase
                      tracking-[0.35em]
                      text-white/70
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                relative z-10
                flex flex-col gap-4
                mt-16
                w-[85%]
                max-w-sm
              "
            >
              <Link
                href="/watch"
                onClick={() => setOpen(false)}
                className="
                  px-8 py-4
                  rounded-full
                  bg-white
                  text-black
                  text-center
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  font-bold
                "
              >
                Watch Film
              </Link>

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="
                  px-8 py-4
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  text-white
                  text-center
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                "
              >
                Login
              </Link>
            </motion.div>

            {/* bottom */}
            <div className="absolute bottom-10">
              <p
                className="
                  uppercase
                  tracking-[0.4em]
                  text-[10px]
                  text-zinc-600
                "
              >
                NGINIG / 2.5D 
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}