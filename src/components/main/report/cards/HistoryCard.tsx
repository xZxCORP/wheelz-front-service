import { GiNotebook } from 'react-icons/gi';

import { NoticeCard } from '../NoticeCard';
export const HistoryCard = ({ vehicle }: { vehicle: any }) => ({
  key: 'history',
  content: (
    <div>
      {vehicle.history.map((entry: any, index: number) => (
        <p key={index}>
          <strong>Date :</strong> {entry.date} - {entry.type}
        </p>
      ))}
    </div>
  ),
  cardComponent: (
    <NoticeCard
      title="Historique"
      Icon={GiNotebook}
      warning={vehicle.history.length === 0} // Exemple : warning si pas d'historique
    />
  ),
});
