import { createColumnHelper } from '@tanstack/react-table';
import { type Vehicle } from '@zcorp/shared-typing-wheelz';
import { Link } from 'react-router-dom';

import { chainTsr } from '../../../clients/api/chain.api';
import { Table } from '../../../components/admin/Table';
import { Button } from '../../../components/shared/button/Button';
import { usePagination } from '../../../hooks/usePagination';
export const ChainTablePage = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });
  const { data } = chainTsr.chain.getAllVehiclesOfTheChain.useQuery({
    queryKey: ['chain', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  const columnHelper = createColumnHelper<Vehicle>();

  const columns = [
    columnHelper.accessor('vin', {
      header: 'Vin',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.brand', {
      header: 'Marque',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.model', {
      header: 'Modèle',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.color', {
      header: 'Couleur',
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        return (
          <div>
            <Button asChild>
              <Link to={`/admin/chain/${info.row.original.vin}`}>Voir</Link>
            </Button>
          </div>
        );
      },
    }),
  ];

  return (
    data && (
      <div className="flex flex-col gap-2">
        <Table
          title="Chaine"
          data={data.body.items}
          meta={data.body.meta}
          columns={columns}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        ></Table>
        {/* <div>
          <Button asChild buttonStyle={{ color: 'secondary' }}>
            <Link to="/admin/transactions/new">Créer une transaction</Link>
          </Button>
        </div> */}
      </div>
    )
  );
};
