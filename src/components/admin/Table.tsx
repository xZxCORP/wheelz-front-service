import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

type Props<T extends object> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};

export const Table = <T extends object>({ data, columns }: Props<T>) => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const toggleRowExpanded = (rowId: string) => {
    setExpandedRows((prev) => ({ ...prev, [rowId]: !prev[rowId] }));
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      {/* Desktop view */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-primary-600 text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-secondary-200 bg-white">
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm text-secondary-700">
                    <div className="max-w-xs truncate">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        {table.getRowModel().rows.map((row) => {
          const firstCell = row.getVisibleCells()[0];
          return (
            <div
              key={row.id}
              className="mb-4 rounded-lg border border-secondary-200 bg-white p-4 shadow-sm"
            >
              <div
                className="flex cursor-pointer items-center justify-between font-semibold"
                onClick={() => toggleRowExpanded(row.id)}
              >
                <span>
                  {firstCell && flexRender(firstCell.column.columnDef.cell, firstCell.getContext())}
                </span>
                {expandedRows[row.id] ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
              </div>
              {expandedRows[row.id] && (
                <div className="mt-2 space-y-2">
                  {row
                    .getVisibleCells()
                    .slice(1)
                    .map((cell) => (
                      <div key={cell.id} className="flex flex-col">
                        <span className="text-xs font-semibold text-secondary-500">
                          {cell.column.columnDef.header &&
                          typeof cell.column.columnDef.header === 'string'
                            ? cell.column.columnDef.header
                            : cell.id}
                        </span>
                        <span className="text-sm text-secondary-700">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
