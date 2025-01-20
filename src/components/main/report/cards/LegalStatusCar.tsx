//import { useState } from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';

import { NoticeCard } from '../NoticeCard';

export const LegalStatusCard = ({ vehicle }: { vehicle: any }) => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const handleOpenModal = () => setIsModalOpen(true);
  //const handleCloseModal = () => setIsModalOpen(false);
  return {
    title: 'Statut légal',
    icon: <FaBalanceScale className="text-4xl text-gray-700" />,
    key: 'legal',
    content: (
      <div className="rounded-lg bg-gray-50 p-4 shadow-md">
        <h2 className="text-lg font-bold">Statut légal</h2>
        <p className="mb-4 text-sm text-gray-600">
          Le véhicule a-t-il passé le contrôle technique ? A-t-il été marqué comme mis à la casse ?
        </p>

        {/* Note */}
        <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
          <div className="mr-3 shrink-0 text-xl text-blue-500">
            <FaBalanceScale />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              Contrôle technique effectué en {vehicle.technicalControls[0]?.date}
            </p>
          </div>
        </div>

        {/* Juridique */}
        <h3 className="mb-3 text-base font-bold">Juridique</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Contrôle technique */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold">Contrôle technique</h4>
              {vehicle.technicalControls[0]?.result === 'Ok' ? (
                <div className="flex items-center space-x-1 text-green-600">
                  <FaCheckCircle className="text-xl" />
                  <span className="text-sm font-medium">Passé</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 text-yellow-500">
                  <FaTriangleExclamation className="text-xl" />
                  <span className="text-sm font-medium">Analyse</span>
                </div>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {vehicle.technicalControls[0]?.resultRaw ?? 'Pas de détails disponibles'}
            </p>
            <button className="mt-2 text-sm text-blue-500 hover:underline" />
          </div>

          {/* Épave */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold">Épave</h4>
              <div className="flex items-center space-x-1 text-green-600">
                <FaCheckCircle className="text-xl" />
                <span className="text-sm font-medium">Aucun enregistrement trouvé</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Rien n&aposindique que le véhicule a été déclaré comme épave.
            </p>
          </div>
        </div>
      </div>
    ),
    cardComponent: <NoticeCard title="Détails" Icon={FaBalanceScale} warning={false} />,
  };
};
