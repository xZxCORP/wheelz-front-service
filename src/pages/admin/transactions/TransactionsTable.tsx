import { createColumnHelper } from '@tanstack/react-table';
import { type VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { Link } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { Table } from '../../../components/admin/Table';
import { Button } from '../../../components/shared/button/Button';
import { ActionBadge } from '../../../components/transaction/ActionBadge';
import { StatusBadge } from '../../../components/transaction/StatusBadge';
import { usePagination } from '../../../hooks/usePagination';
import { formatDate } from '../../../utils/date';
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

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      cell: (info) => <ActionBadge action={info.getValue()} />,
    }),
    columnHelper.accessor('status', {
      header: 'Statut',
      cell: (info) => <StatusBadge status={info.getValue()} />,
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
            <Button asChild>
              <Link to={`/admin/transactions/${info.row.original.id}`}>Voir</Link>
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
