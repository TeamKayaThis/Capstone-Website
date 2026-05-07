'use client';

export interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  className?: string;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  className = '',
}: DashboardCardProps) {
  return (
    <div
      className={`p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-tight text-brand-muted mb-2">
            {title}
          </p>
          <h3 className="text-2xl font-serif text-brand-dark">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-2">{subtitle}</p>}
        </div>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
    </div>
  );
}
