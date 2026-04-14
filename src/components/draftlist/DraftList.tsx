import { DraftItem } from '@/src/types';

export default function DraftList({
  title,
  drafts,
}: {
  title: string;
  drafts: DraftItem[];
}) {
  return (
    <div className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif mb-8">{title}</h2>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {drafts.map((draft) => (
          <div
            key={draft.id}
            className="border-b border-gray-200 pb-2 text-brand-muted hover:text-brand-dark transition-colors"
          >
            {draft.title}
          </div>
        ))}
      </div>
    </div>
  );
}
