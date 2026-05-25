import { Globe, Clock, Lock, Calendar } from 'lucide-react';

const items = [
  {
    icon: <Globe size={20} />,
    title: 'Synopsis',
    text: "A cinematic exploration of life beyond epilepsy through emotional storytelling.",
  },
  {
    icon: <Clock size={20} />,
    title: 'Runtime',
    text: 'Short film format (student capstone project)',
  },
  {
    icon: <Lock size={20} />,
    title: 'Genre',
    text: 'Animation • Drama • Psychological',
  },
  {
    icon: <Calendar size={20} />,
    title: 'Art Style',
    text: '2.5D Cinematic Animation',
  },
];

export default function InfoGrid() {
  return (
    <section className="px-4 md:px-10 py-16">

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Film Overview
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden transition duration-300 hover:scale-[1.02]"
            >

              {/* glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative z-10 flex gap-4">

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-6">
                    {item.text}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}