import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type Props<T extends object> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};

export const Table = <T extends object>({ data, columns }: Props<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-primary-600 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
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
                <td
                  key={cell.id}
                  className="whitespace-nowrap px-6 py-4 text-sm text-secondary-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
