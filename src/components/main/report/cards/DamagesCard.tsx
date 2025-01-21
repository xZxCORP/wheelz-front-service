import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { FaCarCrash } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

import { NoticeCard } from '../NoticeCard';
type Props = {
  vehicle: Vehicle;
};

export const DamageCard = ({ vehicle }: Props) => ({
  title: 'Damage',
  icon: <FaCarCrash className="text-4xl text-gray-700" />,
  key: 'damage',
  content: (
    <div className="rounded-lg bg-gray-50 p-4 shadow-md">
      <h2 className="text-lg font-bold">Dommages</h2>
      <p className="mb-4 text-sm text-gray-600">Quels ont été les dommages du véhicule ?</p>

      {/* Note */}
      <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
        <div className="mr-3 shrink-0 text-xl text-blue-500">
          <FaInfoCircle />
        </div>
        <div>
          <p className="text-sm text-gray-800">Vérifie les dommages du véhicule</p>
        </div>
      </div>

      {/* Historique des dommages */}
      <h3 className="mb-4 text-lg font-semibold text-gray-700">Historique des dommages</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Dernier sinistre */}
        <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4 shadow">
          <div className="text-3xl text-red-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Dernier sinistre</p>
            <p className="text-base font-bold text-gray-800">
              {vehicle.sinisterInfos.lastSinisterDate}
            </p>
          </div>
        </div>

        {/* Résolution */}
        <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4 shadow">
          <div className="text-3xl text-green-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Résolution</p>
            <p className="text-base font-bold text-gray-800">
              {vehicle.sinisterInfos.lastResolutionDate}
            </p>
          </div>
        </div>

        {/* Total des sinistres */}
        <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4 shadow">
          <div className="text-3xl text-yellow-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Total des sinistres</p>
            <p className="text-base font-bold text-gray-800">{vehicle.sinisterInfos.count}</p>
          </div>
        </div>
      </div>
    </div>
  ),
  cardComponent: (
    <NoticeCard
      title="Dommages"
      icon={FaCarCrash}
      warning={vehicle.sinisterInfos.count > 0} // Exemple : warning si des sinistres sont présents
    />
  ),
});
