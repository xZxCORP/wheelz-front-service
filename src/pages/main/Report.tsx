import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { useEffect, useState } from 'react';
//import { FaCarCrash } from 'react-icons/fa';
import { GiCrossedChains } from 'react-icons/gi';

import { createCarImage } from '../../clients/api/carImage.api';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';

export const Report = () => {
  const [carImage, setCarImage] = useState<string | undefined>();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  /*const REPORT_CARDS = [
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: false },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
  ];*/

  const getCarImage = async () => {
    console.log(vehicleFixture.features.color);

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
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-40 w-full items-center justify-center rounded-lg  text-center font-bold md:w-40">
              <img src={carImage} />
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
          {/* Caractéristique techniques */}
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-bold">Caractéristiques techniques</h2>
            <table className="w-full table-auto border-collapse border border-gray-200">
              <tbody>
                {Object.entries(vehicle.features).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border border-gray-200 p-2 font-medium capitalize">{key}</td>
                    <td className="border border-gray-200 p-2">{value ?? 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Historique */}
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-bold">Historique</h2>
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-2">Date</th>
                  <th className="border border-gray-200 p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {vehicle.history.map((entry, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 p-2">{entry.date}</td>
                    <td className="border border-gray-200 p-2">{entry.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contrôle technique */}
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-bold">Contrôle technique</h2>
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-2">Date</th>
                  <th className="border border-gray-200 p-2">Résultat</th>
                  <th className="border border-gray-200 p-2">Nature</th>
                  <th className="border border-gray-200 p-2">Kilométrage</th>
                </tr>
              </thead>
              <tbody>
                {vehicle.technicalControls.map((control, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 p-2">{control.date}</td>
                    <td className="border border-gray-200 p-2">{control.resultRaw}</td>
                    <td className="border border-gray-200 p-2">{control.nature}</td>
                    <td className="border border-gray-200 p-2">{control.km} km</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {REPORT_CARDS.map((element, index) => (
              <NoticeCard
                key={index}
                title={element.title}
                Icon={element.Icon}
                warning={element.warning}
              />
            ))}
          </div> */}
        </div>
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
