// src/components/FeatureSection.tsx
export default function FeatureSection({
  title,
  children,
  imageUrl,
}: {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}) {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-8 text-center flex flex-col items-center">
      <h2 className="text-3xl font-serif mb-8">{title}</h2>
      <div className="text-brand-muted leading-relaxed mb-10">{children}</div>
      <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-100">
        {/* You can use a direct internet URL here */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
