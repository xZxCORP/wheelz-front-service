import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { FaCar } from 'react-icons/fa6';

import { InfoField } from '../shared/InfoField';
import { H3 } from '../shared/typography/Typography';

interface Props {
  vehicle: Vehicle;
}

export const VehicleInfos = ({ vehicle }: Props) => (
  <div className="rounded-lg border border-secondary-200 bg-secondary-50 p-4">
    <div className="flex items-center gap-2 text-secondary-800">
      <FaCar size={20} className="text-primary-500" />
      <H3>Informations du véhicule</H3>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-4">
      <InfoField label="VIN" value={vehicle.vin} />
      <InfoField label="Constructeur" value={vehicle.constructorName} />
      <InfoField label="Modèle" value={vehicle.model} />
      <InfoField label="Année" value={vehicle.year.toString()} />
    </div>
  </div>
);
