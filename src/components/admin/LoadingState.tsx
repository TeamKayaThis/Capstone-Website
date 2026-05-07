'use client';

export interface LoadingStateProps {
  rows?: number;
}

export default function LoadingState({ rows = 5 }: LoadingStateProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
      ))}
    </div>
  );
}
