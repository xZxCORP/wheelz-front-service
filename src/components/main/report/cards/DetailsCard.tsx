import { FaInfoCircle } from 'react-icons/fa';

import { NoticeCard } from '../NoticeCard';

export const DetailsCard = ({ vehicle }: { vehicle: any }) => ({
  key: 'details',
  content: (
    <div>
      <p>
        <strong>Marque :</strong> {vehicle.features.brand}
      </p>
      <p>
        <strong>Modèle :</strong> {vehicle.features.model}
      </p>
      <p>
        <strong>Couleur :</strong> {vehicle.features.color}
      </p>
      <p>
        <strong>Énergie :</strong> {vehicle.features.energy}
      </p>
    </div>
  ),
  cardComponent: <NoticeCard title="Détails" Icon={FaInfoCircle} warning={false} />,
});
