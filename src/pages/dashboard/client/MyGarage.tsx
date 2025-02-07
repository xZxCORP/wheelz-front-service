import { vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { Outlet, useNavigate } from 'react-router-dom';

import { MyCarCard } from './MyCarCard';

export const MyGarage = () => {
  const navigate = useNavigate();

  const handleCards = (vin: number) => {
    navigate(`/dashboard/my-garage/vehicle/${vin}`);
  };

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

  const { data: vehicleData } = {
    data: { status: 200, body: vehicleFixture },
  };

  return (
    <div className="flex size-full gap-2">
      <div className="m-4 flex w-1/4 flex-col justify-start space-y-1 overflow-scroll">
        {[vehicleData.body, vehicleData.body].map((e: typeof vehicleFixture, index) => (
          <MyCarCard
            key={e.vin}
            id={index}
            onClick={handleCards}
            brand={e.features.brand}
            model={e.features.model}
            firstRegistrationDate={e.infos.firstSivRegistrationDate}
            mileage={39_182}
          />
        ))}
      </div>
      <div className="bg-primary-100 m-4 w-3/4 overflow-scroll rounded">
        <Outlet />
      </div>
    </div>
  );
};
