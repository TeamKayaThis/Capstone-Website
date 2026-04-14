import Link from 'next/link';

export default function SignupForm() {
  return (
    <form className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif mb-2">Create an account</h1>
        <p className="text-sm text-brand-muted">
          Join the Beyond the Shake community
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase mb-1">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-xs uppercase mb-1">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs uppercase mb-1">Email address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-xs uppercase mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <Link href="/signup" className="w-full">
        <button
          type="button"
          className="w-full bg-brand-dark text-white py-2 rounded uppercase text-xs tracking-widest hover:bg-black transition-colors"
        >
          Sign Up
        </button>
      </Link>

      <p className="text-center text-xs">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600">
          Login
        </a>
      </p>
    </form>
  );
}
