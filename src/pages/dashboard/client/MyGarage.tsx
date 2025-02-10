import { Outlet, useNavigate } from 'react-router-dom';

import { chainTsr } from '../../../clients/api/chain.api';
import { PaginationControls } from '../../../components/admin/PaginationControls';
import { Button } from '../../../components/shared/button/Button';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { usePagination } from '../../../hooks/usePagination';
import { isApiResponse } from '../../../utils/errors';
import { MyCarCard } from './MyCarCard';

export const MyGarage = () => {
  const navigate = useNavigate();

  const handleCards = (vin: string) => {
    navigate(`/dashboard/my-garage/vehicle/${vin}`);
  };
  const { apiPagination, onNextPage, onPreviousPage, canNextPage, canPreviousPage, pagesCount } =
    usePagination({
      initialPage: 1,
      initialPerPage: 10,
    });

  const { data: allVehiclesData, error } = chainTsr.chain.getAllVehiclesOfTheChain.useQuery({
    queryKey: ['chain', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  return (
    allVehiclesData && (
      <div className="flex size-full flex-col gap-2 md:flex-row">
        <div className="m-4 flex flex-col justify-start space-y-1 md:w-1/4">
          {allVehiclesData.body.items.map((vehicle) => (
            <MyCarCard key={vehicle.vin} id={vehicle.vin} vehicle={vehicle} onClick={handleCards} />
          ))}
          {allVehiclesData.body.meta.page > 1 && (
            <PaginationControls
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
              canNextPage={canNextPage(allVehiclesData.body.meta.total)}
              canPreviousPage={canPreviousPage()}
              currentPage={apiPagination.page}
              totalPages={pagesCount(allVehiclesData.body.meta.total)}
            />
          )}
          {allVehiclesData.body.meta.total === 0 && (
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Vous n&apos;avez pas encore de véhicule dans votre garage.</p>
              <Button>Ajouter un véhicule</Button>
            </div>
          )}
        </div>
        <div className="m-4 overflow-y-scroll rounded bg-primary-100 md:w-3/4">
          <Outlet />
        </div>
      </div>
    )
  );
};
