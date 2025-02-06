import { vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { useMemo, useState } from 'react';
import { GiCrossedChains } from 'react-icons/gi';
import { PiShareFatThin } from 'react-icons/pi';
import { useParams } from 'react-router-dom';

import { createCarImage } from '../../clients/api/carImage.api';
import { DamageCard } from '../../components/main/report/cards/DamagesCard';
import { DetailsCard } from '../../components/main/report/cards/DetailsCard';
import { HistoryCard } from '../../components/main/report/cards/HistoryCard';
import { LegalStatusCard } from '../../components/main/report/cards/LegalStatusCard';
import { Button } from '../../components/shared/button/Button';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';
import { useSnackbarStore } from '../../stores/useSnackbar';
import { formatFrenchDate } from '../../utils/date';
import { isApiResponse } from '../../utils/errors';
type PageParams = {
  vin: string;
};
export const Report = () => {
  const { vin } = useParams<PageParams>();
  const { addSnackbar } = useSnackbarStore();
  /* const {
    data: vehicleData,
    isPending,
    error,
  } = chainTsr.chain.getVehicleOfTheChain.useQuery({
    queryKey: ['vehicles', vin],
    queryData: {
      query: { vin: vin ?? undefined },
    },
    enabled: !!vin,
  });
  const { data: vinMetadatasData } = transactionTsr.transactions.getVinMetadatas.useQuery({
    queryKey: ['vehicles', vin, 'metadatas'],
    queryData: {
      params: { vin: vin! },
    },
    enabled: !!vin,
  });} */

  const {
    data: vehicleData,
    isPending,
    error,
    vinMetadatasData,
  } = {
    data: { status: 200, body: vehicleFixture },
    isPending: false,
    error: undefined,
    vinMetadatasData: undefined,
  };
  const carImage = useMemo(() => {
    if (!vehicleData) return null;
    return createCarImage({
      make: vehicleData.body.features.brand,
      year: vehicleData.body.infos.firstSivRegistrationDate.split('-')[0] ?? '2020',
      model: vehicleData.body.features.model,
      color: vehicleData.body.features.color,
    });
  }, [vehicleData]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const CARDS =
    vehicleData && vehicleData.status == 200
      ? [
          DetailsCard({ vehicle: vehicleData.body }),
          HistoryCard({ vehicle: vehicleData.body }),
          DamageCard({ vehicle: vehicleData.body }),
          LegalStatusCard({ vehicle: vehicleData.body }),
        ]
      : [];

  const handleCopy = () => {
    addSnackbar('Url copied !', 'info');
    navigator.clipboard.writeText('Shared url');
  };

  if (isPending) return <LoadingAnimation />;
  if (error && isApiResponse(error)) {
    return (
      <ErrorContainer
        errorMessage={
          error.body.message ?? 'Impossible de récuperer les informations sur ce véhicule'
        }
      />
    );
  }
  return (
    vehicleData && (
      <div className="flex w-full">
        <div className=" mx-auto w-full max-w-7xl space-y-6">
          <div className="bg-primary-200 rounded-lg p-4 shadow-md  md:p-6">
            {/* Header avec l'image et les infos principales */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
              {carImage && (
                <div className="flex h-40 w-full items-center justify-center rounded-lg text-center md:h-10 md:w-40">
                  <img src={carImage} alt="Car" />
                </div>
              )}
              <div className="grow">
                <div className="mb-2 flex gap-2 text-lg">
                  <span className="capitalize">{vehicleData.body.features.brand}</span>
                  <span>{vehicleData.body.features.model}</span>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  <p className="bg-secondary-500 rounded-md p-2 text-white">
                    VIN: <span className="font-bold">{vehicleData.body.vin}</span>
                  </p>
                  <p className="bg-secondary-500 rounded-md p-2 text-white">
                    Première immatriculation:{' '}
                    <span className="font-bold">
                      {vehicleData.body.infos.firstSivRegistrationDate}
                    </span>
                  </p>
                  <Button
                    buttonVariant="solid"
                    className="hover:bg-primary-400"
                    onClick={handleCopy}
                  >
                    <PiShareFatThin size={25} />
                  </Button>
                  {vinMetadatasData && (
                    <>
                      <p className="bg-info-700 text-secondary-200 rounded-md p-2">
                        Date de création:{' '}
                        <span className="font-bold">
                          {formatFrenchDate(new Date(vinMetadatasData.body.firstTransactionDate))}
                        </span>
                      </p>
                      <p className="bg-info-700 text-secondary-200 rounded-md p-2">
                        Date de dernière mise à jour:{' '}
                        <span className="font-bold">
                          {formatFrenchDate(new Date(vinMetadatasData.body.lastTransactionDate))}
                        </span>
                      </p>
                    </>
                  )}
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
                      ? 'border-blue-500 bg-blue-50'
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
          <div className="bg-primary-200 rounded-lg p-4 shadow-md md:p-6">
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
          <div className="bg-primary-200 flex items-center gap-4 rounded-lg p-4 shadow-md">
            <GiCrossedChains className="shrink-0 text-3xl" />
            <h3 className="text-sm font-medium md:text-base">
              Informations vérifiées par la LockChain
            </h3>
          </div>
        </div>
      </div>
    )
  );
};
