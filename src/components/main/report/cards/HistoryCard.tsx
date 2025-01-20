import { FaInfoCircle } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

import { NoticeCard } from '../NoticeCard';
export const HistoryCard = ({ vehicle }: { vehicle: any }) => ({
  title: 'History',
  icon: <GiNotebook className="text-4xl text-gray-700" />,
  key: 'history',
  content: (
    <div>
      <div className="mt-6 w-full rounded-lg border bg-white p-4 shadow-md">
        <h2 className="text-lg font-bold">Historique</h2>
        <p className="mb-4 text-sm text-gray-600">Quel est l'historique pour ce véhicule ?</p>

        {/* Note */}
        <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
          <div className="mr-3 shrink-0 text-xl text-blue-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              Vérifie que l'historique de ce véhicule correspondent aux déclarations du vendeur.
            </p>
          </div>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-800">Historique</h3>
        <div className="rounded-lg border bg-white p-6 shadow-md">
          <ul className="space-y-4">
            {/* Première ligne spéciale pour le dernier événement */}
            {[
              ...vehicle.history.map((entry: any) => ({
                date: entry.date,
                type: `Historique : ${entry.type}`,
              })),
              ...vehicle.technicalControls.map((control: any) => ({
                date: control.date,
                type: `Contrôle technique : ${control.nature} (${control.result}) - ${control.resultRaw}`,
              })),
              {
                date: vehicle.sinisterInfos.lastSinisterDate,
                type: 'Sinistre : Dernier sinistre enregistré',
              },
              {
                date: vehicle.sinisterInfos.lastResolutionDate,
                type: 'Sinistre : Dernière résolution de sinistre',
              },
            ]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((entry, index) => (
                <li
                  key={index}
                  className={`flex items-start space-x-4 ${
                    index === 0 ? 'rounded-lg border border-blue-400 bg-blue-100 p-4' : ''
                  }`}
                >
                  <div className={`text-gray-500 ${index === 0 ? 'text-lg font-bold' : ''}`}>
                    <strong>Date :</strong> {entry.date}
                  </div>
                  <div className={`text-gray-800 ${index === 0 ? 'text-lg font-semibold' : ''}`}>
                    <strong>Événement :</strong> {entry.type}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
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
