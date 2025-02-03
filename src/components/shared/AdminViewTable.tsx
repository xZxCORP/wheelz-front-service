import React from 'react';

interface TableRow {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}

interface AdminViewTableProps {
  rows: TableRow[];
  className?: string;
}

export const AdminViewTable: React.FC<AdminViewTableProps> = ({
  rows,
  className = '',
}) => {
  return (
    <table className={`w-full py-2.5 px-4 ${className}`}>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={`border-b text-black ${row.className || ''}`}>
            <th className="text-left font-normal px-0 py-2.5 uppercase w-72">
              {row.label}
            </th>
            <td className="text-left font-normal px-2 py-2.5">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
