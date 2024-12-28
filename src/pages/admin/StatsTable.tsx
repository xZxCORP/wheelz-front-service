import { chainTsr } from '../../clients/api/chain.api';
import { ChainStatsChart } from '../../components/chain/ChainStatsChart';
import { H1 } from '../../components/shared/typography/Typography';

export const StatsTable = () => {
  const { data } = chainTsr.chain.stats.useQuery({
    queryKey: ['chain', 'stats'],
  });
  return (
    <div className="flex flex-col gap-4">
      <H1 variant="primary">Statistiques</H1>
      {data && <ChainStatsChart data={data.body} />}
    </div>
  );
};
