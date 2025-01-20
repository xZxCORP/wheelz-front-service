import { chainTsr } from '../../clients/api/chain.api';
import { transactionTsr } from '../../clients/api/transaction.api';
import { ChainStatsLineChart } from '../../components/chain/ChainStatsLineChart';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';
import { H1 } from '../../components/shared/typography/Typography';
import { TransactionStatsLineChart } from '../../components/transaction/stats/TransactionStatsLineChart';
import { TransactionStatusRepartitionPie } from '../../components/transaction/stats/TransactionStatusRepartitionPie';
import { TransactionTypeRepartitionPie } from '../../components/transaction/stats/TransactionTypeRepartitionPie';
import { isApiResponse } from '../../utils/errors';

export const StatsPage = () => {
  const { data: chainStatsData, error } = chainTsr.chain.stats.useQuery({
    queryKey: ['chain', 'stats'],
  });
  const { data: transactionStatsData } = transactionTsr.transactions.stats.useQuery({
    queryKey: ['transactions', 'stats'],
  });
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }
  return (
    <div className="flex flex-col gap-4">
      <H1 variant="primary">Statistiques</H1>
      {chainStatsData && <ChainStatsLineChart data={chainStatsData.body} />}
      {transactionStatsData && <TransactionStatsLineChart data={transactionStatsData.body} />}
      {transactionStatsData && <TransactionStatusRepartitionPie data={transactionStatsData.body} />}
      {transactionStatsData && <TransactionTypeRepartitionPie data={transactionStatsData.body} />}
    </div>
  );
};
