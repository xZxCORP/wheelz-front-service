import { useParams } from 'react-router-dom';

import { chainTsr } from '../../clients/api/chain.api';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';
import { LoadingAnimation } from '../../components/shared/LoadingAnimation';
import { VehicleReport } from '../../components/vehicle/VehicleReport';
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
    vehicleData &&
    vehicleData.status === 200 && (
      <div className="flex w-full">
        <VehicleReport vehicle={vehicleData.body} />
      </div>
    )
  );
};
