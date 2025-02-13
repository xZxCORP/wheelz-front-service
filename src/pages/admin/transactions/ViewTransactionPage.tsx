import type { VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { TransactionCard } from '../../../components/transaction/cards/TransactionCard';
import { ViewUpdateTransaction } from '../../../components/transaction/cards/ViewUpdateTransaction';
import { CreateTransactionDataForm } from '../../../components/transaction/forms/CreateTransactionDataForm';
import { DeleteTransactionDataForm } from '../../../components/transaction/forms/DeleteTransactionDataForm';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  id: string;
};
export const ViewTransactionPage = () => {
  const { id } = useParams<PageParams>();
  const { data, error } = transactionTsr.transactions.getTransactionById.useQuery({
    queryKey: ['transactions', id],
    queryData: {
      params: { id: id! },
    },
  });
  const getTransactionVehicleCard = useCallback((transaction: VehicleTransaction) => {
    switch (transaction.action) {
      case 'create': {
        return <CreateTransactionDataForm baseData={transaction.data} onlyView allowRapidFill />;
      }
      case 'update': {
        return <ViewUpdateTransaction data={transaction.data} />;
      }
      case 'delete': {
        return <DeleteTransactionDataForm baseData={transaction.data} onlyView />;
      }
    }
  }, []);
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }
  return (
    data && (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <TransactionCard transaction={data.body} />
        {getTransactionVehicleCard(data.body)}
      </div>
    )
  );
};
