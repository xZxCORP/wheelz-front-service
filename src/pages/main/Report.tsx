import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { useEffect, useState } from 'react';
import { GiCrossedChains } from 'react-icons/gi';

import { createCarImage } from '../../clients/api/carImage.api';
import { DamageCard } from '../../components/main/report/cards/DamagesCard';
import { DetailsCard } from '../../components/main/report/cards/DetailsCard';
import { HistoryCard } from '../../components/main/report/cards/HistoryCard';
import { LegalStatusCard } from '../../components/main/report/cards/LegalStatusCar';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';

export const Report = () => {
  const [carImage, setCarImage] = useState<string | undefined>();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const CARDS = vehicle
    ? [
        DetailsCard({ vehicle }),
        HistoryCard({ vehicle }),
        DamageCard({ vehicle }),
        LegalStatusCard({ vehicle }),
      ]
    : [];

  const getCarImage = async () => {
    const carUrl = createCarImage({
      make: vehicleFixture.features.brand,
      year: vehicleFixture.infos.firstSivRegistrationDate.split('-')[0] ?? '2020',
      model: vehicleFixture.features.model,
      color: vehicleFixture.features.color,
    });

    setCarImage(carUrl);
  };

  useEffect(() => {
    setVehicle(vehicleFixture);
    getCarImage();
  }, []);

  if (!vehicle) return <LoadingAnimation />;

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          {/* Header avec l'image et les infos principales */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-40 w-full items-center justify-center rounded-lg text-center font-bold md:w-40">
              <img src={carImage} alt="Car" />
            </div>
            <div className="grow">
              <div className="mb-2 text-lg font-bold">
                <span className="capitalize">{vehicle.features.brand}</span>{' '}
                {vehicle.features.model}
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                  VIN: <span className="font-bold">{vehicle.vin}</span>
                </p>
                <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                  Première immatriculation:{' '}
                  <span className="font-bold">{vehicle.infos.firstSivRegistrationDate}</span>
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
          <div className="mt-6 w-full rounded-lg border bg-white p-4 shadow-md">
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
  );
};
