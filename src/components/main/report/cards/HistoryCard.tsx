import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { GiNotebook } from 'react-icons/gi';

import { NoticeCard } from '../NoticeCard';
import { HistoryComponent } from './HistoryComponent';
type Props = {
  vehicle: Vehicle;
};
export const HistoryCard = ({ vehicle }: Props) => ({
  title: 'History',
  icon: <GiNotebook className="text-4xl text-gray-700" />,
  key: 'history',
  content: <HistoryComponent vehicle={vehicle} />,
  cardComponent: (
    <NoticeCard
      title="Historique"
      icon={GiNotebook}
      warning={vehicle.history.length === 0} // Exemple : warning si pas d'historique
    />
  ),
});
