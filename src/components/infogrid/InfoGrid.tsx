import { Globe, Clock, Lock, Calendar } from 'lucide-react'; // Install with: npm install lucide-react

const items = [
  {
    icon: <Globe size={24} />,
    title: 'Synopsis',
    text: "Body text about your film's plot...",
  },
  {
    icon: <Clock size={24} />,
    title: 'Runtime',
    text: 'Length of the film...',
  },
  {
    icon: <Lock size={24} />,
    title: 'Genre',
    text: 'Animation, Drama, etc...',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Art style',
    text: '2.5D Animation...',
  },
];

export default function InfoGrid() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-8">
      <h2 className="text-3xl font-bold mb-12">Section heading</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-brand-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
