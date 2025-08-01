import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { PiFileArrowUpThin } from 'react-icons/pi';

import { useModal } from '../../../../hooks/useModal';
import { MODAL_IDS } from '../../../../types/modalIds';
import { Button } from '../../../shared/button/Button';
import { Modal } from '../../../shared/Modal';

export const HistoryComponent = ({ vehicle }: { vehicle: Vehicle }) => {
  const { open, isOpen, close } = useModal(MODAL_IDS.HISTORY);
  const [currentPdfFile, setCurrentPdfFile] = useState<string | null>(null);

  const getCurrentPdfFile = (fileUrl: string) => {
    setCurrentPdfFile(fileUrl);
    open();
  };

  const handleCloseModal = () => {
    setCurrentPdfFile(null);
    close();
  };

  return (
    <div>
      <div className="mt-6 w-full rounded-lg border bg-white p-4 shadow-md">
        <h2 className="text-lg ">Historique</h2>
        <p className="mb-4 text-sm text-gray-600">Quel est l&apos;historique pour ce véhicule ?</p>

        {/* Note */}
        <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
          <div className="mr-3 shrink-0 text-xl text-secondary-500">
            <FaInfoCircle />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              Vérifiez que l&apos;historique de ce véhicule correspondent aux déclarations
            </p>
          </div>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-800">Historique</h3>
        <div className="rounded-lg border bg-white p-6 shadow-md">
          <ul className="space-y-4">
            {/* Première ligne spéciale pour le dernier événement */}
            {[
              ...vehicle.history.map((entry) => ({
                date: entry.date,
                type: `Historique : ${entry.type}`,
                fileUrl: undefined,
              })),
              ...vehicle.technicalControls.map((control) => ({
                date: control.date,
                type: `Contrôle technique : ${control.nature} (${control.result}) - ${control.resultRaw}`,
                fileUrl: control.fileUrl,
              })),
              vehicle.sinisterInfos.lastSinisterDate
                ? {
                    date: vehicle.sinisterInfos.lastSinisterDate,
                    type: 'Sinistre : Dernier sinistre enregistré',
                    fileUrl: undefined,
                  }
                : undefined,
              vehicle.sinisterInfos.lastResolutionDate
                ? {
                    date: vehicle.sinisterInfos.lastResolutionDate,
                    type: 'Sinistre : Dernière résolution de sinistre',
                    fileUrl: undefined,
                  }
                : undefined,
            ]
              .filter((entry) => entry !== undefined)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((entry, index) => (
                <li
                  key={index}
                  className={`flex cursor-pointer items-start space-x-1 transition-all hover:translate-x-1 ${
                    index === 0 ? 'rounded-lg border border-secondary-500 bg-secondary-100 p-4' : ''
                  }`}
                  onClick={() => (entry.fileUrl ? getCurrentPdfFile(entry.fileUrl) : null)}
                >
                  <div className={`text-gray-500 ${index === 0 ? 'text-lg ' : ''}`}>
                    <strong>Date :</strong> {entry.date}
                  </div>
                  <div className={`text-gray-800 ${index === 0 ? 'text-lg' : ''}`}>
                    <strong>Événement :</strong> {entry.type}
                  </div>
                </li>
              ))}
          </ul>

          <Modal isOpen={isOpen} onClose={handleCloseModal} title="Télécharger la facture">
            {currentPdfFile && (
              <div className="flex items-center space-x-2">
                <a target="_blank" rel="noreferrer" className="cursor-pointer">
                  <u className="text-secondary-500">{currentPdfFile}</u>
                </a>
                <Button>
                  <a href={currentPdfFile}>
                    <PiFileArrowUpThin />
                  </a>
                </Button>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};
