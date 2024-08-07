import { useEffect, useState } from 'react';
import { FaCarCrash } from 'react-icons/fa';

import { cars } from '../../assets/faker/cars';
import LoadingAnimation from '../../components/LoadingAnimation';
import NoticeCard from '../../components/report/NoticeCard';
import { IVehicle } from '../../types/vehicle';

const Report = () => {
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);

  useEffect(() => {
    setVehicle(cars[0]);
  }, [vehicle]);

  return (
    <div className="bg-secondary-50 flex size-full justify-center">
      {vehicle ? (
        <div className="w-1/2 flex-row space-y-5">
          <div
            className="bg-white  mt-10 w-full rounded-lg p-2
        "
          >
            <div className="mb-5 flex w-full space-x-2">
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
                <div className="flex max-w-fit space-x-2 text-sm text-white">
                  <p className="rounded bg-black p-1 font-bold ">
                    VIN: <span>{vehicle.vin}</span>
                  </p>
                  <p className="rounded bg-black p-1 ">{vehicle.year}</p>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 justify-around space-x-2">
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
            </div>
          </div>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default Report;
