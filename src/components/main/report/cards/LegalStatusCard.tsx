//import { useState } from 'react';
import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';

import { NoticeCard } from '../NoticeCard';
type Props = {
  vehicle: Vehicle;
};
export const LegalStatusCard = ({ vehicle }: Props) => {
  const warning = vehicle.technicalControls[0]?.resultRaw !== 'A';

  return {
    title: 'Statut légal',
    icon: <FaBalanceScale className="text-4xl text-gray-700" />,
    key: 'legal',
    content: (
      <div className="rounded-lg bg-gray-50 p-4 shadow-md">
        <p className="text-lg ">Statut légal</p>
        <p className="mb-4 text-sm text-gray-600">
          Le véhicule a-t-il passé le contrôle technique ? A-t-il été marqué comme mis à la casse ?
        </p>

        {/* Note */}
        <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
          <div className="mr-3 shrink-0 text-xl text-blue-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              Contrôle technique effectué le {vehicle.technicalControls[0]?.date}
            </p>
          </div>
        </div>

        {/* Juridique */}
        <h3 className="mb-3 text-base ">Juridique</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Contrôle technique */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-sm ">Contrôle technique</h4>
              {vehicle.technicalControls[0]?.resultRaw === 'A' ? (
                <div className="flex items-center space-x-1 text-green-600">
                  <FaCheckCircle className="text-xl" />
                  <span className="text-sm font-medium">Favorable</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 text-yellow-500">
                  <FaTriangleExclamation className="text-xl" />
                  <span className="text-sm font-medium">Défavorable</span>
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
              <h4 className="text-sm ">Épave</h4>
              <div className="flex items-center space-x-1 text-green-600">
                <FaCheckCircle className="text-xl" />
                <span className="text-sm font-medium">Aucun enregistrement trouvé</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Rien n&apos;indique que le véhicule a été déclaré comme épave.
            </p>
          </div>
        </div>
      </div>
    ),
    cardComponent: <NoticeCard title="Statut légal" icon={FaBalanceScale} warning={warning} />,
  };
};
