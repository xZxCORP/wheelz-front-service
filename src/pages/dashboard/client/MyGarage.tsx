import { Outlet, useNavigate } from 'react-router-dom';

import { CarCard } from './CarCard';

export const MyGarage = () => {
  const navigate = useNavigate();

  const handleCards = (vin: number) => {
    navigate(`/dashboard/my-garage/vehicle/${vin}`);
  };

  return (
    <div className="flex size-full gap-2">
      <div className="m-4 flex w-1/4 flex-col justify-start space-y-1 overflow-scroll">
        {[1, 2].map((e) => (
          <CarCard
            key={'Car'}
            id={e}
            onClick={handleCards}
            brand={'Peugeot'}
            model={'208'}
            year={2019}
            mileage={39_182}
          />
        ))}
      </div>
      <div className="bg-primary-400 m-4 w-3/4 overflow-scroll rounded">
        <Outlet />
      </div>
    </div>
  );
};
