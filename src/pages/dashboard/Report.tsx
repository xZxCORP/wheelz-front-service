import { useEffect, useState } from 'react';

import { cars } from '../../assets/faker/cars';
import LoadingAnimation from '../../components/LoadingAnimation';
import { IVehicle } from '../../types/vehicle';

const Report = () => {
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);

  useEffect(() => {
    setVehicle(cars[0]);
  }, [vehicle]);

  return (
    <div className="bg-primary-100 flex size-full justify-center">
      {vehicle ? (
        <div className="w-1/2 flex-row space-y-5">
          <div
            className="bg-primary-30  mt-10 w-full rounded-lg p-2 
        "
          >
            <div className="flex w-full space-x-1 text-center font-bold sm:text-left">
              <h1>{vehicle.constructor.charAt(0).toUpperCase() + vehicle.constructor.slice(1)}</h1>
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
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default Report;
