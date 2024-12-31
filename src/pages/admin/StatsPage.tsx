import { chainTsr } from '../../clients/api/chain.api';
import { transactionTsr } from '../../clients/api/transaction.api';
import { ChainStatsLineChart } from '../../components/chain/ChainStatsLineChart';
import { H1 } from '../../components/shared/typography/Typography';
import { TransactionStatsLineChart } from '../../components/transaction/TransactionStatsLineChart';
import { TransactionStatusRepartitionPie } from '../../components/transaction/TransactionStatusRepartitionPie';
import { TransactionTypeRepartitionPie } from '../../components/transaction/TransactionTypeRepartitionPie';

export const StatsPage = () => {
  const { data: chainStatsData } = chainTsr.chain.stats.useQuery({
    queryKey: ['chain', 'stats'],
  });
  const { data: transactionStatsData } = transactionTsr.transactions.stats.useQuery({
    queryKey: ['transactions', 'stats'],
  });
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
