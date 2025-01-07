import { FaCarCrash } from 'react-icons/fa';

import { NoticeCard } from '../NoticeCard';

export const DamageCard = ({ vehicle }: { vehicle: any }) => ({
  key: 'damage',
  content: (
    <div>
      <p>
        <strong>Dernier sinistre :</strong> {vehicle.sinisterInfos.lastSinisterDate}
      </p>
      <p>
        <strong>Résolution :</strong> {vehicle.sinisterInfos.lastResolutionDate}
      </p>
      <p>
        <strong>Total sinistres :</strong> {vehicle.sinisterInfos.count}
      </p>
    </div>
  ),
  cardComponent: (
    <NoticeCard
      title="Dommages"
      Icon={FaCarCrash}
      warning={vehicle.sinisterInfos.count > 0} // Exemple : warning si des sinistres sont présents
    />
  ),
});
