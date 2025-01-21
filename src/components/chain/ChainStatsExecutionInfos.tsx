import type { ChainStats } from '@zcorp/shared-typing-wheelz';

import { P } from '../shared/typography/Typography';

type Props = {
  data: ChainStats;
};
export const ChainStatsExecutionInfos = ({ data }: Props) => {
  if (!data.lastExecution) {
    return <P>Aucune exécution connue</P>;
  }
  return (
    <div className="flex flex-col gap-2">
      <P>
        Dernière exécution : <strong>{data.lastExecution.date}</strong>
      </P>
      <P>
        Nombre de nouvelles transactions : <strong>{data.lastExecution.newTransactions}</strong>
      </P>
    </div>
  );
};
