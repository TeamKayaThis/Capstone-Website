'use client';

export interface DataTableProps {
  columns: Array<{
    key: string;
    label: string;
    className?: string;
  }>;
  data: Array<Record<string, any>>;
  onRowClick?: (row: Record<string, any>) => void;
  actions?: Array<{
    label: string;
    onClick: (row: Record<string, any>) => void;
    className?: string;
  }>;
  isLoading?: boolean;
}

export default function DataTable({
  columns,
  data,
  onRowClick,
  actions,
  isLoading,
}: DataTableProps) {
  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-6 py-3 text-left text-xs font-sans tracking-tight uppercase text-brand-muted ${
                  col.className || ''
                }`}
              >
                {col.label}
              </th>
            ))}
            {actions && actions.length > 0 && (
              <th className="px-6 py-3 text-left text-xs font-sans tracking-tight uppercase text-brand-muted">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-gray-100 ${onRowClick ? 'hover:bg-gray-50 cursor-pointer' : ''}`}
            >
              {columns.map((col) => (
                <td
                  key={`${idx}-${col.key}`}
                  className={`px-6 py-4 text-sm text-gray-700 ${col.className || ''}`}
                >
                  {row[col.key]}
                </td>
              ))}
              {actions && actions.length > 0 && (
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    {actions.map((action, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(row);
                        }}
                        className={`px-3 py-1 text-xs rounded border transition-colors ${
                          action.className ||
                          'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
