import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { Button } from '../shared/button/Button';

type Props = {
  onNextPage: () => void;
  onPreviousPage: () => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
  currentPage: number;
  totalPages: number;
};
export const PaginationControls = ({
  onNextPage,
  onPreviousPage,
  canNextPage,
  canPreviousPage,
  currentPage,
  totalPages,
}: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Button onClick={onPreviousPage} disabled={!canPreviousPage}>
          Précédent
        </Button>
        <Button onClick={onNextPage} disabled={!canNextPage}>
          Suivant
        </Button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> sur{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Button onClick={onPreviousPage} disabled={!canPreviousPage}>
              <FaChevronLeft />
            </Button>
            <Button onClick={onNextPage} disabled={!canNextPage}>
              <FaChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
