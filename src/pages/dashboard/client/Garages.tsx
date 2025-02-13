import { useEffect, useState } from 'react';

import { companyTsr } from '../../../clients/api/company.api';
import { PaginationControls } from '../../../components/admin/PaginationControls';
import { usePagination } from '../../../hooks/usePagination';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { GarageCard } from './GarageCard';

export const Garages = () => {
  const [location, setCurrentLocation] = useState<GeolocationCoordinates>();
  const { addSnackbar } = useSnackbarStore();

  const { apiPagination, onNextPage, onPreviousPage, canNextPage, canPreviousPage, pagesCount } =
    usePagination({
      initialPage: 1,
      initialPerPage: 10,
    });

  const { data: companiesData } = companyTsr.contract.index.useQuery({
    queryKey: ['companies', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation(position.coords);
      });
    } else addSnackbar('Accès impossible à la position actuelle', 'warning');
  }, [addSnackbar]);

  return (
    <div className="bg-primary-50 m-10 flex h-4/5 w-full  rounded-xl px-5">
      {companiesData ? (
        <div className="size-full flex-col">
          <div className="grid h-3/4 w-full grid-cols-3 flex-row justify-around gap-3">
            {companiesData.body.items.map((one) => (
              <GarageCard
                id={one.id}
                key={one.id}
                name={one.name}
                tags={['auto', 'moto', 'controle technique']}
              />
            ))}
          </div>
          <PaginationControls
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            canNextPage={canNextPage(companiesData.body.meta.total)}
            canPreviousPage={canPreviousPage()}
            currentPage={apiPagination.page}
            totalPages={pagesCount(companiesData.body.meta.total)}
          />
        </div>
      ) : (
        <p>Aucun garage n&apos;a été trouvé</p>
      )}
    </div>
  );
};
