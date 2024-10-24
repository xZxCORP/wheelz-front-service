import type { VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { CreateTransactionDataCard } from '../../../components/transaction/CreateTransactionDataCard';
import { DeleteTransactionDataCard } from '../../../components/transaction/DeleteTransactionDataCard';
import { TransactionCard } from '../../../components/transaction/TransactionCard';
import { UpdateTransactionCard } from '../../../components/transaction/UpdateTransactionDataCard';

type PageParams = {
  id: string;
};
export const ViewTransactionPage = () => {
  const { id } = useParams<PageParams>();
  const { data } = transactionTsr.transactions.getTransactionById.useQuery({
    queryKey: ['transactions', id],
    queryData: {
      params: { id: id! },
    },
  });
  const getTransactionVehicleCard = useCallback((transaction: VehicleTransaction) => {
    switch (transaction.action) {
      case 'create': {
        return <CreateTransactionDataCard data={transaction.data} />;
      }
      case 'update': {
        return <UpdateTransactionCard data={transaction.data} />;
      }
      case 'delete': {
        return <DeleteTransactionDataCard data={transaction.data} />;
      }
    }
  }, []);

  return (
    data && (
      <div className="flex flex-col items-center justify-center gap-3">
        <TransactionCard transaction={data.body} />
        {getTransactionVehicleCard(data.body)}
      </div>
    )
  );
};
