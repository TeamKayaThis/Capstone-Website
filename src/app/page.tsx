import Hero from '../components/hero/Hero';
import FilmPreview from '../components/filmpreview/FilmPreview';
import FeatureSection from '../components/featureselection/FeatureSelection';
import InfoCard from '../components/infocard/InfoCard';
import DraftList from '../components/draftlist/DraftList';
import CTASection from '../components/ctasection/CTASection';

export default function Home() {
  // for drafts
  const myDrafts = [
    { id: 1, title: 'DRAFT' },
    { id: 2, title: 'DRAFT' },
    { id: 3, title: 'DRAFT' },
    { id: 4, title: 'DRAFT' },
  ];

  return (
    <>
      <div className="flex flex-col w-full">
        <Hero
          title="NGINIG: Conveying Life beyond Epilepsy"
          subtitle="A 2.5D animated story about life beyond epilepsy."
        />

        {/* This will now span the full width of the screen */}
        <FilmPreview src="/hero/hero.gif" />
      </div>

      <FeatureSection
        title="This short animated film explores..."
        imageUrl="/feature/feature.gif" // Ensure this matches the prop name in your component
      >
        <p>
          This film delves into the daily experiences of those living with
          epilepsy, aiming to foster empathy and understanding through visual
          storytelling.
        </p>
      </FeatureSection>
      <section className="max-w-6xl mx-auto px-8 py-16">
        {/* Top Card */}

        <InfoCard title="Draft title" subtitle="2025 Capstone" className="mb-8">
          <img src="/contents/1.jpg" className="w-full h-auto rounded mb-4" />
          <p>The team - ...</p>
        </InfoCard>

        {/* Bottom Two Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard title="Meet the members" subtitle="Upcoming event">
            <img src="/contents/2.jpg" className="rounded-lg w-80 h-80 mb-4" />
            {/* Team details */}
          </InfoCard>

          <InfoCard title="TEAM KAYA THIS" subtitle="Spotlight">
            <img
              src="/contents/3.jpg"
              className="rounded-full w-100 h-100 mb-4"
            />
          </InfoCard>
        </div>
      </section>
      <DraftList title="My Drafts" drafts={myDrafts} />
      <CTASection
        text="This film shows strong emotional storytelling."
        buttonText="Watch film"
        bgImage="/cta/1.png" // Use your internet URL here if preferred!
      />
    </>
  );
}
