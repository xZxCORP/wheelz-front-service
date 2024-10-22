import { createColumnHelper } from '@tanstack/react-table';
import { type TransactionAction, type VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { useCallback } from 'react';

import { transactionTsr } from '../../clients/api/transaction.api';
import { Table } from '../../components/admin/Table';
import { Badge } from '../../components/shared/badge/Badge';
export const TransactionsTable = () => {
  const { data } = transactionTsr.transactions.getTransactions.useQuery({
    queryKey: ['transactions'],
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
    // columnHelper.accessor('timestamp', {
    //   header: 'Date de création',
    //   cell: (info) => formatDate(new Date(info.getValue())),
    // }),
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
