export default function CTASection({
  text,
  buttonText,
  bgImage,
}: {
  text: string;
  buttonText: string;
  bgImage: string;
}) {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 max-w-2xl">
          {text}
        </h2>
        <button className="border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-brand-muted transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
