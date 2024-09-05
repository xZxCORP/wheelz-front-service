import { useEffect, useState } from 'react';
import { FaCarCrash } from 'react-icons/fa';
import { GiCrossedChains } from 'react-icons/gi';

import { cars } from '../../assets/faker/cars';
import LoadingAnimation from '../../components/LoadingAnimation';
import NoticeCard from '../../components/report/NoticeCard';
import { IVehicle } from '../../types/vehicle';

const Report = () => {
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);
  const REPORT_CARDS = [
    {
      title: 'Damage',
      Icon: FaCarCrash,
      warning: true,
    },
    {
      title: 'Damage',
      Icon: FaCarCrash,
      warning: true,
    },
    {
      title: 'Damage',
      Icon: FaCarCrash,
      warning: true,
    },
    {
      title: 'Damage',
      Icon: FaCarCrash,
      warning: false,
    },
    {
      title: 'Damage',
      Icon: FaCarCrash,
      warning: true,
    },
  ];

  useEffect(() => {
    setVehicle(cars[0]);
  }, [vehicle]);

  return (
    <div className="flex size-full justify-center bg-secondary-50">
      {vehicle ? (
        <div className="w-screen flex-row space-y-5 md:w-4/5">
          <div className="w-full rounded-lg bg-primary-50 p-4 md:mt-10">
            <div className="mb-5 w-full justify-start space-x-2 md:flex">
              <div className="flex size-40 items-center bg-slate-200 text-center font-bold">
                <p className="w-full">CAR PICTURE</p>
              </div>
              <div>
                <div className="flex w-full space-x-1 text-center font-bold sm:text-left">
                  <h1>
                    {vehicle.constructor.charAt(0).toUpperCase() + vehicle.constructor.slice(1)}
                  </h1>
                  <h2>{vehicle.model}</h2>
                </div>
                <div className="flex flex-wrap items-center text-sm text-white md:space-x-2">
                  <p className="text-clip rounded bg-black p-1 font-bold ">
                    VIN: <span>{vehicle.vin}</span>
                  </p>
                  <p className="rounded bg-black p-1 ">{vehicle.year}</p>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full flex-wrap justify-around gap-2">
              {REPORT_CARDS.map((element) => (
                <NoticeCard
                  key={element.title}
                  title={element.title}
                  Icon={element.Icon}
                  warning={element.warning}
                />
              ))}
            </div>
          </div>
          <div className="flex h-fit w-full items-center space-x-2 rounded-lg bg-primary-50 p-2 md:mt-10">
            <GiCrossedChains size={40} />
            <h3 className="font-medium">Verified information by cross-sources</h3>
          </div>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default Report;
