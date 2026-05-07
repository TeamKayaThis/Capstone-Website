'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif mb-2">Welcome back!</h1>
        <p className="text-sm text-brand-muted">
          Enter your credentials to access your account
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs uppercase mb-1">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <a href="/forgot-password" className="text-right text-[10px] mt-1 text-blue-600 cursor-pointer block">
            Forgot password
          </a>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-dark text-white py-2 rounded uppercase text-xs tracking-widest hover:bg-black transition-colors disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <div className="text-center text-xs text-brand-muted">or</div>

      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="border py-2 text-xs rounded hover:bg-gray-50">
          Google
        </button>
        <button type="button" className="border py-2 text-xs rounded hover:bg-gray-50">
          Apple
        </button>
      </div>

      <p className="text-center text-xs">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600">
          Sign Up
        </a>
      </p>
    </form>
  );
}
