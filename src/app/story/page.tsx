"use client";

import { motion } from "framer-motion";

const fragments = [
  {
    id: "00",
    title: "The Silence",
    desc: "Everything begins with the things left unspoken.",
  },

  {
    id: "01",
    title: "The Pressure",
    desc: "Fear and uncertainty slowly begin to take shape.",
  },

  {
    id: "02",
    title: "The Struggle",
    desc: "Isolation quietly grows within everyday moments.",
  },

  {
    id: "03",
    title: "Acceptance",
    desc: "Understanding becomes the first step toward healing.",
  },
];

export default function StoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* base */}
        <div className="absolute inset-0 bg-black" />

        {/* grid */}
        <div
          className="
            absolute inset-0 opacity-[0.05]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        {/* glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-red-500/15 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 blur-[220px]" />

        {/* grain */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">

        {/* bg word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[20vw] font-black tracking-[-0.08em] text-white/[0.03] select-none">
            STORY
          </h1>

        </div>

        <div className="relative z-10 max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-8"
          >
            STORY ARCHIVE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl xl:text-[10rem] font-black leading-[0.9]"
          >

            More than a story.<br />

            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
               It is a journey beyond silence.
            </span>

          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-40 h-[1px] bg-gradient-to-r from-red-500 to-transparent my-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-2xl text-zinc-400 text-lg leading-8"
          >
            NGINIG explores fear, stigma, emotional pressure,
            and the silent struggles that slowly shape how a person
            perceives themselves and the world around them.
          </motion.p>

        </div>

      </section>

      {/* ================================================= */}
      {/* PREMISE */}
      {/* ================================================= */}
      <section className="relative px-6 md:px-16 py-40 overflow-hidden">

        {/* bg text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[18vw] font-black text-white/[0.03]">
            MEMORY
          </h1>

        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-10">
            PREMISE
          </p>

          <h2 className="text-3xl md:text-6xl font-light leading-[1.3] text-zinc-100">

            “Silence can change the way
            <span className="font-semibold text-white">
              {" "}we see ourselves.
            </span>
            ”


          </h2>

          <div className="w-24 h-[1px] bg-white/20 mx-auto my-14" />

          <p className="max-w-3xl mx-auto text-zinc-500 text-lg leading-8">

            As fear, pressure, and isolation continue to build,
            ordinary moments slowly become heavier, quieter,
            and harder to escape.

          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* THEMES */}
      {/* ================================================= */}
      <section className="relative px-6 md:px-16 py-32">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">

            <div>

              <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-6">
                THEMES
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-none">

                Fear. <br />
                Silence. <br />
                Acceptance.

              </h2>

            </div>

            <p className="max-w-md text-zinc-500 leading-8 text-lg">

              NGINIG focuses on emotional immersion,
            allowing the audience to experience uncertainty,
            silence, and vulnerability through the characters themselves.


            </p>

          </div>

          {/* cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Fear",
                desc: "The fear of being judged, misunderstood, and seen differently.",
            },

            {
                title: "Silence",
                desc: "Unspoken struggles slowly create distance between people and themselves.",
            },

            {
                title: "Acceptance",
                desc: "Understanding and compassion become the first steps toward healing.",
            },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  p-10
                "
              >

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-red-500/10 blur-3xl" />

                <p className="relative z-10 text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-6">
                  CONCEPT
                </p>

                <h3 className="relative z-10 text-3xl font-black mb-6">
                  {item.title}
                </h3>

                <p className="relative z-10 text-zinc-400 leading-8">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FRAGMENTS */}
      {/* ================================================= */}
      <section className="relative px-6 md:px-16 py-40 overflow-hidden">

        {/* bg word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[16vw] font-black text-white/[0.03]">
            FRAGMENTS
          </h1>

        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          <div className="text-center mb-24">

            <p className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-8">
              MEMORY TIMELINE
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              FMoments of Change
            </h2>

          </div>

          <div className="space-y-8">

            {fragments.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  flex flex-col md:flex-row md:items-center gap-8
                  rounded-[32px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8 md:p-12
                "
              >

                <div className="text-5xl md:text-7xl font-black text-zinc-700 min-w-[140px]">
                  {item.id}
                </div>

                <div>

                  <h3 className="text-3xl md:text-5xl font-black mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 text-lg">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FINAL MESSAGE */}
      {/* ================================================= */}
      <section className="relative py-48 text-center overflow-hidden">

        {/* bg text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[22vw] font-black text-white/[0.02]">
            END
          </h1>

        </div>

        <div className="relative z-10 px-6">

          <div className="w-28 h-[1px] bg-white/20 mx-auto mb-10" />

          <h2 className="text-4xl md:text-7xl font-black leading-[1.1] max-w-5xl mx-auto">

           Not every struggle <br />
           can be seen.

          </h2>

          <p className="mt-12 text-[10px] tracking-[0.7em] uppercase text-zinc-600">
            NGINIG / STORY ARCHIVE
          </p>

        </div>

      </section>

    </main>
  );
}