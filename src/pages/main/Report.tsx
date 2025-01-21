import { vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { useMemo, useState } from 'react';
import { GiCrossedChains } from 'react-icons/gi';
import { useParams } from 'react-router-dom';

import { createCarImage } from '../../clients/api/carImage.api';
import { chainTsr } from '../../clients/api/chain.api';
import { DamageCard } from '../../components/main/report/cards/DamagesCard';
import { DetailsCard } from '../../components/main/report/cards/DetailsCard';
import { HistoryCard } from '../../components/main/report/cards/HistoryCard';
import { LegalStatusCard } from '../../components/main/report/cards/LegalStatusCard';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';
import { isApiResponse } from '../../utils/errors';
type PageParams = {
  vin: string;
};
export const Report = () => {
  const { vin } = useParams<PageParams>();
  const {
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
  const carImage = useMemo(() => {
    if (!vehicleData) return null;
    return createCarImage({
      make: vehicleFixture.features.brand,
      year: vehicleFixture.infos.firstSivRegistrationDate.split('-')[0] ?? '2020',
      model: vehicleFixture.features.model,
      color: vehicleFixture.features.color,
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
        <div className="mx-auto w-full max-w-7xl space-y-6">
          <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
            {/* Header avec l'image et les infos principales */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
              {carImage && (
                <div className="flex h-40 w-full items-center justify-center rounded-lg text-center font-bold md:h-10 md:w-40">
                  <img src={carImage} alt="Car" />
                </div>
              )}
              <div className="grow">
                <div className="mb-2 flex gap-2 text-lg font-bold">
                  <span className="capitalize">{vehicleData.body.features.brand}</span>
                  <span>{vehicleData.body.features.model}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                    VIN: <span className="font-bold">{vehicleData.body.vin}</span>
                  </p>
                  <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                    Première immatriculation:{' '}
                    <span className="font-bold">
                      {vehicleData.body.infos.firstSivRegistrationDate}
                    </span>
                  </p>
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
          <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
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
          <div className="flex items-center gap-4 rounded-lg bg-primary-50 p-4 shadow-md">
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
