// src/app/about/page.tsx
import Hero from '@/src/components/hero/Hero';
import InfoGrid from '@/src/components/infogrid/InfoGrid';
import TeamSection from '@/src/components/teamsection/TeamSection';
import Gallery from '@/src/components/gallery/Gallery';
import TeamGrid from '@/src/components/teamgrid/TeamGrid';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-brand-light">
      <Hero
        title="About Film"
        subtitle="This short animated film explores..."
      />

      <section className="max-w-5xl mx-auto px-8 pb-20">
        <div className="w-full rounded-lg overflow-hidden shadow-xl">
          {/* Your group image from the file */}
          <img
            src="/hero/11.jpg"
            alt="Film Characters"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-12 text-brand-muted leading-relaxed max-w-3xl mx-auto">
          <p>
            This short animated film explores the nuances of living with
            epilepsy, moving beyond the stigma to show the resilience and depth
            of the human experience.
          </p>
        </div>
      </section>
      <InfoGrid />
      <TeamSection />
      <TeamGrid />
      <Gallery />
    </div>
  );
}
