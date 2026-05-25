"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="relative w-full"
    >
      {/* GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-[180px]" />
      </div>

      {/* PANEL */}
      <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10">

        {/* HEADER */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase">
            CREATE ACCESS ID
          </p>

          <h1 className="text-4xl font-black">
            Join NGINIG
          </h1>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <input
            placeholder="First Name"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
            required
          />

          <input
            placeholder="Last Name"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />
        </div>

        <input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          required
        />

        <input
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full mb-6 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white font-semibold tracking-[0.25em]"
        >
          {loading ? "CREATING..." : "CREATE ACCOUNT"}
        </button>

        <p className="text-center text-xs text-zinc-500 mt-6">
          Already have access? <a href="/login" className="text-white">Sign in</a>
        </p>
      </div>
    </motion.form>
  );
}