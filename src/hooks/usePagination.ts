import type { PaginationState } from '@tanstack/react-table';
import type { PaginationParameters } from '@zcorp/wheelz-contracts';
import { useMemo, useState } from 'react';

interface UsePaginationOptions {
  initialPage?: number;
  initialPerPage?: number;
}

export const usePagination = (options: UsePaginationOptions = {}) => {
  const { initialPage = 1, initialPerPage = 10 } = options;

  const [apiPagination, setApiPagination] = useState<PaginationParameters>({
    page: initialPage,
    perPage: initialPerPage,
  });

  const pagination: PaginationState = useMemo(
    () => ({
      pageIndex: apiPagination.page - 1,
      pageSize: apiPagination.perPage,
    }),
    [apiPagination.page, apiPagination.perPage]
  );

  return {
    pagination,
    apiPagination,
    onPaginationChange: setApiPagination,
  };
};
