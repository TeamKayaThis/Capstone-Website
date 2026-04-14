const teamMembers = [
  {
    name: 'KEANA MAXINE P. ALVAREZ',
    role: 'QA Testers',
    img: '/teamgrid/33.png',
  },
  {
    name: 'SAMANTHA JAN S. ORTEGA',
    role: 'UI/UX Designer',
    img: '/teamgrid/31.jpg',
  },
  {
    name: 'LADY CHRYSCHEL B. PRASMO',
    role: 'Project Manager',
    img: '/teamgrid/35.jpg',
  },
  {
    name: 'ADRIANNE A. REYES',
    role: 'UI/UX Designer',
    img: '/teamgrid/34.jpg',
  },
  {
    name: 'MARY BELEN T. ROGECIO',
    role: 'System Analysis',
    img: '/teamgrid/32.jpg',
  },
];

export default function TeamGrid() {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {teamMembers.map((member, i) => (
          <div key={i} className="text-center">
            {/* The image tag now uses the path from our data */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full aspect-square object-cover rounded-lg mb-4"
            />

            <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-wider mb-1">
              {member.name}
            </h4>
            <p className="text-brand-muted text-[10px] uppercase">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
