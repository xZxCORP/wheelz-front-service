import { createColumnHelper } from '@tanstack/react-table';
import { type TransactionAction, type VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { useCallback } from 'react';

import { transactionTsr } from '../../clients/api/transaction.api';
import { Table } from '../../components/admin/Table';
import { Badge } from '../../components/shared/badge/Badge';
import { Button } from '../../components/shared/button/Button';
import { usePagination } from '../../hooks/usePagination';
import { formatDate } from '../../utils/date';
export const TransactionsTable = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });
  const { data } = transactionTsr.transactions.getTransactions.useQuery({
    queryKey: ['transactions', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  const columnHelper = createColumnHelper<VehicleTransaction>();
  const actionToColor = useCallback((action: TransactionAction) => {
    switch (action) {
      case 'create': {
        return 'success';
      }
      case 'update': {
        return 'warning';
      }
      case 'delete': {
        return 'error';
      }
      default: {
        return 'success';
      }
    }
  }, []);
  const statusToColor = useCallback((status: string) => {
    switch (status) {
      case 'pending': {
        return 'warning';
      }
      case 'finished': {
        return 'warning';
      }

      default: {
        return 'success';
      }
    }
  }, []);
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      cell: (info) => (
        <Badge badgeStyle={{ color: actionToColor(info.getValue()) }} text={info.getValue()} />
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Statut',
      cell: (info) => (
        <Badge badgeStyle={{ color: statusToColor(info.getValue()) }} text={info.getValue()} />
      ),
    }),

    columnHelper.accessor('dataSignature.signAlgorithm', {
      header: 'Algorithme de signature',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('data.vin', {
      header: 'Vin du vehicle',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('timestamp', {
      header: 'Date de création',
      cell: (info) => formatDate(new Date(info.getValue())),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        return (
          <div>
            <Button
              onClick={() => {
                console.log(info.row.original);
              }}
            >
              Voir
            </Button>
          </div>
        );
      },
    }),
  ];

  return (
    data && (
      <Table
        title="Transactions"
        data={data.body.items}
        meta={data.body.meta}
        columns={columns}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
      ></Table>
    )
  );
};
