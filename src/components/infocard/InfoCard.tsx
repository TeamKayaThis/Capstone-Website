export default function InfoCard({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-8 border border-gray-100 bg-white rounded-lg ${className}`}
    >
      {subtitle && (
        <p className="text-xs uppercase text-brand-muted mb-2">{subtitle}</p>
      )}
      <h3 className="text-xl font-serif mb-4">{title}</h3>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}
