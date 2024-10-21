import { createColumnHelper } from '@tanstack/react-table';
import { type VehicleTransaction } from '@zcorp/shared-typing-wheelz';

import { transactionTsr } from '../../clients/api/transaction.api';
import { Table } from '../../components/admin/Table';
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
    columnHelper.accessor('timestamp', {
      header: 'Date de création',
      cell: (info) =>
        new Intl.DateTimeFormat('fr-FR', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(new Date(info.getValue())),
    }),
    columnHelper.accessor('dataSignature', {
      header: 'Signature',
      cell: (info) => `${info.getValue().signature} with ${info.getValue().signAlgorithm}`,
    }),
  ];
  return (
    <div>
      <h2>Transactions Table</h2>
      {data && <Table data={data.body as VehicleTransaction[]} columns={columns}></Table>}
    </div>
  );
};
