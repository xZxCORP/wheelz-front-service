import type { Sinister } from '@zcorp/shared-typing-wheelz';

import { H4 } from '../../shared/typography/Typography';
import { SinisterItem } from './SinisterItem';

interface Props {
  sinisters: Sinister[];
}

export const SinisterHistory = ({ sinisters }: Props) => {
  if (!sinisters?.length) return null;
  return (
    <div className="flex flex-col gap-2">
      <H4 className="mb-3 text-secondary-800">Historique des sinistres</H4>
      <div className="flex flex-wrap justify-center gap-2">
        {sinisters.map((sinister, index) => (
          <SinisterItem key={index} sinister={sinister} />
        ))}
      </div>
    </div>
  );
};
