import { useParams } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { TransactionCard } from '../../../components/transaction/TransactionCard';

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

  return data && <TransactionCard transaction={data.body} />;
};
