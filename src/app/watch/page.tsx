"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WatchPage() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ================================================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="relative px-4 md:px-10 pt-40 pb-20">
        <div className="max-w-7xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-6"
          >
            Watch Film
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-[0.15em]"
          >
            NGINIG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-zinc-400 text-lg leading-8 mt-8"
          >
            A 2.5D animated film exploring distorted perception, emotional fear,
            fragmented memory, and unseen realities.
          </motion.p>

        </div>
      </section>

      {/* ================================================= */}
      {/* VIDEO */}
      {/* ================================================= */}
      <section className="px-4 md:px-10 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="NGINIG Trailer"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* FEEDBACK SECTION */}
      {/* ================================================= */}
      <section className="relative px-4 md:px-10 pb-32 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[15vw] font-black text-white/[0.02]">
            FEEDBACK
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto rounded-[40px]
            border border-white/10 bg-white/[0.04]
            backdrop-blur-2xl p-10 md:p-16 text-center"
        >

          <p className="uppercase tracking-[0.5em] text-zinc-500 text-sm mb-8">
            Audience Reflection
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Tell us what you felt <br /> beyond the screen.
          </h2>

          <div className="w-28 h-[1px] bg-gradient-to-r from-red-500 to-transparent mx-auto my-10" />

          <p className="text-zinc-400 text-lg">
            Your feedback helps us understand perception inside NGINIG.
          </p>

          <button
            onClick={() => {
              setShowFeedback(true);
              setSubmitted(false);
            }}
            className="mt-14 px-10 py-5 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Write Feedback
          </button>

        </motion.div>
      </section>

      {/* ================================================= */}
      {/* FEEDBACK MODAL */}
      {/* ================================================= */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        >

          {/* BACKDROP */}
          <div
            onClick={() => setShowFeedback(false)}
            className="absolute inset-0 bg-black/90"
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-full max-w-3xl h-[90vh]
              bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden"
          >

            <div className="h-full overflow-y-auto p-8 md:p-10 space-y-8">

              {/* HEADER */}
              <div>
                <h2 className="text-4xl font-black">Your Feedback</h2>
                <p className="text-zinc-400 mt-3">
                  Share your experience.
                </p>
              </div>

              {/* Q1 */}
              <div>
                <p className="font-semibold mb-3">1. Emotion?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Fear", "Confusion", "Anxiety", "Curiosity"].map((e) => (
                    <button
                      key={e}
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 FIXED SELECT */}
              <div>
                <p className="font-semibold mb-3">2. Disturbing?</p>

                <select className="w-full p-4 rounded-xl bg-[#111] text-white border border-white/10">
                  <option>Yes</option>
                  <option>No</option>
                  <option>Somewhat</option>
                </select>
              </div>

              {/* Q3 */}
              <div>
                <p className="font-semibold mb-3">3. Impactful scene?</p>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />
              </div>

              {/* Q4 */}
              <div>
                <p className="font-semibold mb-3">4. Reality distortion?</p>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 pt-4">

                <button
                  onClick={() => setSubmitted(true)}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold"
                >
                  Submit
                </button>

                <button
                  onClick={() => setShowFeedback(false)}
                  className="px-8 py-4 border border-white/10 rounded-full"
                >
                  Close
                </button>

              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300">
                  Feedback submitted successfully.
                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}

    </main>
  );
}