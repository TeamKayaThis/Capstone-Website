import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 lg:px-24">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Side: Thematic Image (Hidden on small screens) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-brand-dark overflow-hidden rounded-l-3xl">
        <img
          src="/login/waks.png" // Put your Figma image in the /public folder
          alt="Beyond the Shake Art"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
    </div>
  );
}
