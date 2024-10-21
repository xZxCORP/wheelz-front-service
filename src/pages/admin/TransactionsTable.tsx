import { createColumnHelper } from '@tanstack/react-table';
import { type VehicleTransaction } from '@zcorp/shared-typing-wheelz';

import { transactionTsr } from '../../clients/api/transaction.api';
import { Table } from '../../components/admin/Table';
import { formatDate } from '../../utils/date';
export const TransactionsTable = () => {
  const { data } = transactionTsr.transactions.getTransactions.useQuery({
    queryKey: ['transactions'],
  });
  const columnHelper = createColumnHelper<VehicleTransaction>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('action', {
      header: 'Action',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: 'Statut',
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor('dataSignature.signAlgorithm', {
      header: 'Alorithme de signature',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('timestamp', {
      header: 'Date de création',
      cell: (info) => formatDate(new Date(info.getValue())),
    }),
  ];
  return (
    data && (
      <Table
        title="Transactions"
        data={data.body as VehicleTransaction[]}
        columns={columns}
      ></Table>
    )
  );
};
