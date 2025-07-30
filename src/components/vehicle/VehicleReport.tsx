import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { useMemo, useState } from 'react';
import { GiCrossedChains } from 'react-icons/gi';
import { PiShareFatThin } from 'react-icons/pi';

import { createCarImage } from '../../clients/api/carImage.api';
import { transactionTsr } from '../../clients/api/transaction.api';
import { useSnackbarStore } from '../../stores/useSnackbar';
import { formatFrenchDate } from '../../utils/date';
import { DamageCard } from '../main/report/cards/DamagesCard';
import { DetailsCard } from '../main/report/cards/DetailsCard';
import { HistoryCard } from '../main/report/cards/HistoryCard';
import { LegalStatusCard } from '../main/report/cards/LegalStatusCard';
import { Button } from '../shared/button/Button';

type Props = {
  vehicle: Vehicle;
};
export const VehicleReport = ({ vehicle }: Props) => {
  const { addSnackbar } = useSnackbarStore();
  const { data: vinMetadatasData } = transactionTsr.transactions.getVinMetadatas.useQuery({
    queryKey: ['vehicles', vehicle.vin, 'metadatas'],
    queryData: {
      params: { vin: vehicle.vin! },
    },
    enabled: !!vehicle.vin,
  });
  const carImage = useMemo(() => {
    if (!vehicle) return null;
    return createCarImage({
      make: vehicle.features.brand,
      year: vehicle.infos.firstSivRegistrationDate.split('-')[0] ?? '2020',
      model: vehicle.features.model,
      color: vehicle.features.color,
    });
  }, [vehicle]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const CARDS = [
    DetailsCard({ vehicle: vehicle }),
    HistoryCard({ vehicle: vehicle }),
    DamageCard({ vehicle: vehicle }),
    LegalStatusCard({ vehicle: vehicle }),
  ];
  const handleCopy = () => {
    const sharedReportUrl = `${window.location.origin}/report/${vehicle.vin}`;
    navigator.clipboard.writeText(sharedReportUrl);
    addSnackbar('Lien de partage copié !', 'info');
  };

  return (
    <div className="flex w-full">
      <div className=" mx-auto w-full max-w-7xl space-y-6">
        <div className="rounded-lg bg-primary-200 p-4 shadow-md  md:p-6">
          {/* Header avec l'image et les infos principales */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            {carImage && (
              <div className="flex h-40 w-full items-center justify-center rounded-lg text-center md:h-10 md:w-40">
                <img src={carImage} alt="Car" />
              </div>
            )}
            <div className="grow">
              <div className="mb-2 flex gap-2 text-lg">
                <span className="capitalize">{vehicle.features.brand}</span>
                <span>{vehicle.features.model}</span>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                <p className="rounded-md bg-secondary-500 p-2 text-white">
                  VIN: <span className="font-bold">{vehicle.vin}</span>
                </p>
                <p className="rounded-md bg-secondary-500 p-2 text-white">
                  Première immatriculation:{' '}
                  <span className="font-bold">{vehicle.infos.firstSivRegistrationDate}</span>
                </p>

                {vinMetadatasData && (
                  <>
                    <p className="rounded-md bg-primary-100 p-2">
                      Date de création:{' '}
                      <span className="font-bold">
                        {formatFrenchDate(new Date(vinMetadatasData.body.firstTransactionDate))}
                      </span>
                    </p>
                    <p className="rounded-md bg-primary-100 p-2">
                      Date de dernière mise à jour:{' '}
                      <span className="font-bold">
                        {formatFrenchDate(new Date(vinMetadatasData.body.lastTransactionDate))}
                      </span>
                    </p>
                  </>
                )}
                <Button buttonVariant="solid" className="hover:bg-primary-400" onClick={handleCopy}>
                  <PiShareFatThin size={25} />
                </Button>
              </div>
            </div>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((card) => (
              <div
                key={card.key}
                className={`cursor-pointer rounded-lg border-2 p-4 ${
                  selectedCard === card.key
                    ? 'border-secondary-500 bg-secondary-50'
                    : 'border-gray-200 bg-white'
                } shadow hover:shadow-md`}
                onClick={() => setSelectedCard(card.key)}
              >
                <div className="flex flex-col items-center text-center">{card.cardComponent}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenu de la carte sélectionnée */}
        <div className="rounded-lg bg-primary-200 p-4 shadow-md md:p-6">
          <div>
            {selectedCard ? (
              CARDS.find((card) => card.key === selectedCard)?.content
            ) : (
              <p className="text-center text-gray-500">
                Cliquez sur une carte pour afficher les détails.
              </p>
            )}
          </div>
        </div>

        {/* Vérification par LockChain */}
        <div className="flex items-center gap-4 rounded-lg bg-primary-200 p-4 shadow-md">
          <GiCrossedChains className="shrink-0 text-3xl" />
          <h3 className="text-sm font-medium md:text-base">
            Informations vérifiées par la LockChain
          </h3>
        </div>
      </div>
    </div>
  );
};
