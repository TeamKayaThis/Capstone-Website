export default function Gallery() {
  return (
    <div className="grid md:grid-cols-2 gap-8 py-16">
      <img
        src="/gallery/111.png"
        className="w-full h-96 object-cover rounded-lg"
      />
      <img
        src="/gallery/112.png"
        className="w-full h-96 object-cover rounded-lg"
      />
    </div>
  );
}
