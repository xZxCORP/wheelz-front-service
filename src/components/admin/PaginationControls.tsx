import type { Table } from '@tanstack/react-table';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { Button } from '../shared/button/Button';

type Props = {
  table: Table<any>;
};
export const PaginationControls = ({ table }: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Précédent
        </Button>
        <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Suivant
        </Button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{table.getState().pagination.pageIndex + 1}</span>{' '}
            sur <span className="font-medium">{table.getPageCount()}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              <FaChevronLeft />
            </Button>
            <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              <FaChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
