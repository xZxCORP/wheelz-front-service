import type React from 'react';

interface TableRow {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}

interface AdminViewTableProps {
  rows: TableRow[];
  className?: string;
}

export const AdminViewTable: React.FC<AdminViewTableProps> = ({ rows, className = '' }) => {
  return (
    <table className={`w-full px-4 py-2.5 ${className}`}>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={`border-b text-black ${row.className || ''}`}>
            <th className="w-72 px-0 py-2.5 text-left font-normal uppercase">{row.label}</th>
            <td className="px-2 py-2.5 text-left font-normal">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
