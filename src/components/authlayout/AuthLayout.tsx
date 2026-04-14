import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: The Form area */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 lg:px-24">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Side: The Art area (Hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-brand-dark">
        {/* Placeholder image - swap this for your actual artistic shot */}
        <img
          src="/login/many.jpeg"
          alt="Artistic aesthetic"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute bottom-10 left-10 text-white font-serif text-2xl">
          Beyond the Shake
        </div>
      </div>
    </div>
  );
}
