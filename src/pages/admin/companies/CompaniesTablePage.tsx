import { type Company } from '@zcorp/wheelz-contracts';
import { companyTsr } from '../../../clients/api/company.api';
import { usePagination } from '../../../hooks/usePagination';
import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '../../../components/shared/button/Button';
import { Table } from '../../../components/admin/Table';
import { Link } from 'react-router-dom';

export const CompaniesTablePage = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });

  const { data, error } = companyTsr.contract.index.useQuery({
    queryKey: ['companies', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  const columnHelper = createColumnHelper<Company>();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: 'NOM',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('isIdentified', {
      header: 'IDENTIFIÉ',
      cell: (info) => info.getValue() ? 'Oui' : 'Non',
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        return (
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link to={`/admin/companies/${info.row.original.id}`}>Voir</Link>
            </Button>
          </div>
        );
      },
    }),

  ]

  return (
    data && (
      <div className="flex flex-col gap-2">
        <Table
          title="Companies"
          data={data.body.items}
          meta={data.body.meta}
          columns={columns}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        ></Table>
      </div>
    )
  );
}
