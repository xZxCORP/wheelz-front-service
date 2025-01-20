import { useParams } from 'react-router-dom';

import { chainTsr } from '../../../clients/api/chain.api';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  vin: string;
};
export const ViewVehiclePage = () => {
  const { vin } = useParams<PageParams>();
  const { data, error } = chainTsr.chain.getVehicleOfTheChain.useQuery({
    queryKey: ['transactions', vin],
    queryData: {
      query: { vin: vin! },
    },
  });
  //TODO: adding vehicle report when it's ready
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }
  return (
    data && (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        {data && (
          <div>
            {data.body.features.brand} {data.body.features.model}
          </div>
        )}
      </div>
    )
  );
};
