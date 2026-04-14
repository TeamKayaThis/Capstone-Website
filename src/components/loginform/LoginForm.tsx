export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif mb-2">Welcome back!</h1>
        <p className="text-sm text-brand-muted">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="space-y-4">
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
          <p className="text-right text-[10px] mt-1 text-blue-600 cursor-pointer">
            Forgot password
          </p>
        </div>
      </div>

      <button className="w-full bg-brand-dark text-white py-2 rounded uppercase text-xs tracking-widest hover:bg-black transition-colors">
        Login
      </button>

      <div className="text-center text-xs text-brand-muted">or</div>

      <div className="grid grid-cols-2 gap-4">
        <button className="border py-2 text-xs rounded hover:bg-gray-50">
          Google
        </button>
        <button className="border py-2 text-xs rounded hover:bg-gray-50">
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
