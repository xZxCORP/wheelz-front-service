import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type PaginationState,
  useReactTable,
} from '@tanstack/react-table';
import type { Pagination, PaginationParameters } from '@zcorp/wheelz-contracts';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { PaginationControls } from './PaginationControls';

type Props<T extends object> = {
  data: T[];
  meta: Pagination;
  title: string;
  columns: ColumnDef<T, any>[];
  onPaginationChange: (paginationParameters: PaginationParameters) => void;
  pagination: PaginationState;
};

export const Table = <T extends object>({
  data,
  meta,
  onPaginationChange,
  pagination,
  columns,
  title,
}: Props<T>) => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: meta.total,
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
      onPaginationChange({
        page: newPagination.pageIndex + 1,
        perPage: newPagination.pageSize,
      });
    },
    state: {
      pagination,
    },
  });

  const toggleRowExpanded = (rowId: string) => {
    setExpandedRows((prev) => ({ ...prev, [rowId]: !prev[rowId] }));
  };
  useEffect(() => {
    onPaginationChange({
      page: pagination.pageIndex + 1,
      perPage: pagination.pageSize,
    });
  }, [onPaginationChange, pagination]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
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
                    {firstCell &&
                      flexRender(firstCell.column.columnDef.cell, firstCell.getContext())}
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
        <PaginationControls table={table} />
      </div>
    </div>
  );
};
