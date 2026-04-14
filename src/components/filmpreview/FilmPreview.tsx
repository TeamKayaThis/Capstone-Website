export default function FilmPreview({ src }: { src: string }) {
  return (
    // 'w-full' ensures it takes the full width of the parent
    // 'aspect-video' keeps the film's 16:9 ratio
    <div className="w-full aspect-video overflow-hidden shadow-xl">
      <img
        src={src}
        alt="Film Preview"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
