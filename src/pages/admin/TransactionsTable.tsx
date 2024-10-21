import { createColumnHelper } from '@tanstack/react-table';
import {
  createTransactionFixture,
  deleteTransactionFixture,
  type VehicleTransaction,
} from '@zcorp/shared-typing-wheelz';

import { Table } from '../../components/admin/Table';
export const TransactionsTable = () => {
  const data: VehicleTransaction[] = [
    deleteTransactionFixture,
    createTransactionFixture,
    createTransactionFixture,
  ];
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
      cell: (info) => info.getValue().toLocaleDateString(),
    }),
    columnHelper.accessor('dataSignature', {
      header: 'Signature',
      cell: (info) => `${info.getValue().signature} with ${info.getValue().signAlgorithm}`,
    }),
  ];
  return (
    <div>
      <h2>Transactions Table</h2>
      <Table data={data} columns={columns}></Table>
    </div>
  );
};
