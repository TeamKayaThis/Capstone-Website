// src/components/Hero.tsx
export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="w-full py-20 px-8 text-center flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
        {title}
      </h1>
      {subtitle && <p className="text-brand-muted text-3xl">{subtitle}</p>}
    </section>
  );
}
