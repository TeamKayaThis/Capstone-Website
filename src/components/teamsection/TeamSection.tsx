// src/components/TeamSection.tsx
export default function TeamSection() {
  return (
    <section className="py-20 px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-serif mb-2">Meet The Team</h2>
        <p className="text-sm text-brand-muted uppercase tracking-wider">
          short bios or fun facts
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/teamsection/1.jpg"
          alt="The Team"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* You can add a grid below here for individual bios later! */}
    </section>
  );
}
