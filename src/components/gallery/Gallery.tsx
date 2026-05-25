export default function Gallery() {
  return (
    <section className="py-16 px-4 md:px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* IMAGE 1 */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl group">

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

          <img
            src="/contents/1.jpg"
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70">
              Capstone Defended
            </p>
          </div>

        </div>

        {/* IMAGE 2 */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl group">

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

          <img
            src="/contents/3.jpg"
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70">
              Multimedia Production
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}