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
    <div className="bg-primary-100 flex size-full justify-center">
      {vehicle ? (
        <div className="w-screen md:w-4/5 flex-row space-y-5">
          <div
            className="bg-primary-30 md:mt-10 w-full rounded-lg p-4
        "
          >
            <div className="mb-5 w-full space-x-2 md:flex justify-start">
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
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={true} />
              <NoticeCard title={'Damage'} Icon={FaCarCrash} warning={false} />
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
