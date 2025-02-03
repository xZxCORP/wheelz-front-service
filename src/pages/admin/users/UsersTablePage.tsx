import { createColumnHelper } from '@tanstack/react-table';
import type { User } from '@zcorp/wheelz-contracts';

import { userTsr } from '../../../clients/api/user.api';
import { Table } from '../../../components/admin/Table';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { usePagination } from '../../../hooks/usePagination';
import { formatDate } from '../../../utils/date';
import { isApiResponse } from '../../../utils/errors';

export const UsersTablePage = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });
  const { data, error } = userTsr.users.getUsers.useQuery({
    queryKey: ['users', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastname', {
      header: 'Nom',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('firstname', {
      header: 'Prénom',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date de création',
      cell: (info) => formatDate(new Date(info.getValue())),
    }),

    // columnHelper.display({
    //   id: 'actions',
    //   header: 'Actions',
    //   cell: (info) => {
    //     return (
    //       <div className="flex items-center gap-2">
    //         <Button asChild>
    //           <Link to={`/admin/transactions/${info.row.original.id}`}>Voir</Link>
    //         </Button>
    //         {info.row.original.action === 'delete' &&
    //           isLastTransactionIndex(
    //             info.row.index + pagination.pageIndex * pagination.pageSize
    //           ) && <RevertDeleteTransactionButton transactionId={info.row.original.id} />}
    //       </div>
    //     );
    //   },
    // }),
  ];
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  return (
    data && (
      <div className="flex flex-col gap-2">
        <Table
          title="Utilisateurs"
          data={data.body.items}
          meta={data.body.meta}
          columns={columns}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        ></Table>
      </div>
    )
  );
};
