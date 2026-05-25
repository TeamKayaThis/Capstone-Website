"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-full"
    >
      {/* CINEMATIC BACK GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/20 blur-[180px]" />
        <div className="absolute bottom-[-40%] right-[-30%] w-[500px] h-[500px] bg-blue-500/10 blur-[200px]" />
      </div>

      {/* GLASS PANEL */}
      <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">

        {/* ❗ FIXED: NOISE LAYER (does NOT block clicks) */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10">

          {/* HEADER */}
          <div className="space-y-2 text-center mb-8">
            <p className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase">
              SYSTEM ACCESS NODE
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white">
              Welcome back
            </h1>

            <p className="text-sm text-zinc-400">
              Enter credentials to continue
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-4 space-y-2">
            <label className="text-[10px] tracking-[0.4em] text-zinc-500">
              EMAIL
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:border-red-400/40 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)] outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6 space-y-2">
            <label className="text-[10px] tracking-[0.4em] text-zinc-500">
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:border-red-400/40 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)] outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white font-semibold tracking-[0.3em] hover:scale-[1.02] transition shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
            {loading ? "UNLOCKING SYSTEM..." : "ENTER SYSTEM"}
          </button>

          {/* FOOTER */}
          <p className="text-center text-xs text-zinc-500 mt-6">
            New here?{" "}
            <a href="/register" className="text-white hover:underline">
              Create account
            </a>
          </p>

        </div>
      </div>
    </motion.div>
  );
}