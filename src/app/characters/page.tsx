"use client";

import { motion } from "framer-motion";

const characters = [
  {
    name: "Adrian",
    role: "The Protagonist",
    image: "/character/adrian.png",
    desc: "Quiet, distant, and constantly trapped between fear and reality. Adrian carries an unspoken weight that slowly distorts the world around him.",
    system: "DOSSIER_01",
  },

  {
    name: "Christy",
    role: "The Presence",
    image: "/character/christy.png",
    desc: "Composed and unreadable, Christy maintains control through silence, restraint, and quiet observation.",
    system: "DOSSIER_02",
  },

  {
    name: "Rachel",
    role: "The Observer",
    image: "/character/rachel.png",
    desc: "Gentle yet elusive, Rachel exists like a calm voice hidden beneath tension and uncertainty.",
    system: "DOSSIER_03",
  },

  {
    name: "Ryan",
    role: "The Fragment",
    image: "/character/ryan.png",
    desc: "Confident and grounded, Ryan carries a presence that feels both reassuring and strangely unfamiliar.",
    system: "DOSSIER_04",
  },
];

export default function CharactersPage() {
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
          className="absolute inset-0 opacity-[0.05]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:90px_90px]"
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
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16">

        {/* bg word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[18vw] font-black tracking-[-0.08em] text-white/[0.03] select-none">
            DOSSIER
          </h1>

        </div>

        <div className="relative z-10 max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.7em] uppercase text-zinc-500 mb-8"
          >
            CHARACTER DOSSIER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl xl:text-[10rem] font-black leading-[0.9]"
          >

            The minds <br />

            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              behind NGINIG
            </span>

          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-40 h-[1px] bg-gradient-to-r from-red-500 to-transparent my-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="max-w-2xl text-zinc-400 text-lg leading-8"
          >
            Behind every silence lies a story shaped by fear, pressure,
            uncertainty, and the things left unspoken.
          </motion.p>

        </div>

      </section>

      {/* ================================================= */}
      {/* CHARACTER GRID */}
      {/* ================================================= */}
      <section className="relative px-6 md:px-16 pb-40">

        <div className="max-w-[1800px] mx-auto grid xl:grid-cols-2 gap-10">

          {characters.map((char, index) => (

            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
              "
            >

              {/* image */}
              <div className="relative h-[750px] md:h-[950px] overflow-hidden">

                <img
                  src={char.image}
                  alt={char.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    group-hover:scale-[1.03]
                    transition
                    duration-[2000ms]
                  "
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-red-500/10 blur-3xl" />

              </div>

              {/* top badges */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">

                <div className="px-5 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl">

                  <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-300">
                    {char.system}
                  </p>

                </div>

                <div className="px-5 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl">

                  <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-500">
                    ARCHIVE
                  </p>

                </div>

              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">

                <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-4">
                  {char.role}
                </p>

                <h2 className="text-5xl md:text-7xl font-black leading-none mb-6">
                  {char.name}
                </h2>

                <div className="w-24 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-6" />

                <p className="max-w-xl text-zinc-300 text-lg leading-8">
                  {char.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <section className="relative py-40 text-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="text-[20vw] font-black text-white/[0.02] select-none">
            END
          </h1>

        </div>

        <div className="relative z-10 px-6">

          <div className="w-28 h-[1px] bg-white/20 mx-auto mb-10" />

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Beyond perception. <br />
            Beyond memory.

          </h2>

          <p className="mt-10 text-[10px] tracking-[0.7em] uppercase text-zinc-600">
            NGINIG / CHARACTER ARCHIVE
          </p>

        </div>

      </section>

    </main>
  );
}