import { useEffect, useState } from 'react';
import { FaCarCrash } from 'react-icons/fa';
import { GiCrossedChains } from 'react-icons/gi';

import { cars } from '../../assets/faker/cars';
import { NoticeCard } from '../../components/main/report/NoticeCard';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';
import type { IVehicle } from '../../types/vehicle';

export const Report = ({ vehicle }) => {
  //const [vehicle, setVehicle] = useState<IVehicle | undefined>();
  const REPORT_CARDS = [
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
    { title: 'Damage', Icon: FaCarCrash, warning: false },
    { title: 'Damage', Icon: FaCarCrash, warning: true },
  ];

  // useEffect(() => {
  //   setVehicle(cars[0]);
  // }, []);

  if (!vehicle) return <LoadingAnimation />;

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-40 w-full items-center justify-center rounded-lg bg-secondary-200 text-center font-bold md:w-40">
              <p>CAR PICTURE</p>
            </div>
            <div className="grow">
              <div className="mb-2 text-lg font-bold">
                <span className="capitalize">{vehicle.constructor}</span> {vehicle.model}
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                  VIN: <span className="font-bold">{vehicle.vin}</span>
                </p>
                <p className="rounded-md bg-secondary-700 p-2 font-bold text-secondary-200">
                  Year: <span className="font-bold">{vehicle.year}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {REPORT_CARDS.map((element, index) => (
              <NoticeCard
                key={index}
                title={element.title}
                Icon={element.Icon}
                warning={element.warning}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary-50 p-4 shadow-md">
          <GiCrossedChains className="shrink-0 text-3xl" />
          <h3 className="text-sm font-medium md:text-base">
            Verified information by cross-sources
          </h3>
        </div>
      </div>
    </div>
  );
};
