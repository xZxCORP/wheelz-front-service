import { createColumnHelper } from '@tanstack/react-table';
import { type Vehicle, vehicleFixture } from '@zcorp/shared-typing-wheelz';
import { Link } from 'react-router-dom';

import { Table } from '../../../components/admin/Table';
import { Button } from '../../../components/shared/button/Button';
import { usePagination } from '../../../hooks/usePagination';

export const MaintenancesTable = () => {
  const { pagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });

  /* const { data } = companyTsr.contract.index.useQuery({
    queryKey: ['companies', apiPagination],
    queryData: {
      query: apiPagination,
    },
  }); */
  const columnHelper = createColumnHelper<Vehicle>();

  const columns = [
    columnHelper.accessor('vin', {
      header: 'VIN',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('infos.firstRegistrationInFranceDate', {
      // Mettre la date de l'entretien
      header: 'DATE',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.brand', {
      header: 'MARQUE',
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: 'action',
      header: 'Action',
      cell: (info) => {
        return (
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link to={`/dashboard/my-garage/${info.row.original.vin}`}>Voir</Link>
            </Button>
          </div>
        );
      },
    }),
  ];

  return (
    <div className="flex flex-col gap-2">
      <Table
        title="Historique"
        data={[vehicleFixture]}
        columns={columns}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
      ></Table>
    </div>
  );
};
