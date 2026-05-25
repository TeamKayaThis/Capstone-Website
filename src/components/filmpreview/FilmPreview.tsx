export default function FilmPreview({ src }: { src: string }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl group">

      {/* CINEMATIC LIGHT LAYER */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* IMAGE */}
      <img
        src={src}
        alt="Film Preview"
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-700 ease-out"
      />

      {/* FILM GLOW BORDER EFFECT */}
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-[28px]" />

      {/* OPTIONAL LABEL */}
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-xs tracking-[0.3em] uppercase text-white/70">
        </p>
      </div>

    </div>
  );
}