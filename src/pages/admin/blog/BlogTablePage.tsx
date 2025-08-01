import { createColumnHelper } from '@tanstack/react-table';
import type { BlogPost } from '@zcorp/wheelz-contracts';
import { Link } from 'react-router-dom';

import { blogTsr } from '../../../clients/api/blog.api';
import { Table } from '../../../components/admin/Table';
import { Button } from '../../../components/shared/button/Button';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { usePagination } from '../../../hooks/usePagination';
import { formatDate } from '../../../utils/date';
import { isApiResponse } from '../../../utils/errors';

export const BlogTablePage = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });

  const { data, error } = blogTsr.contract.getAllBlogPost.useQuery({
    queryKey: ['blog_posts', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });

  const columnHelper = createColumnHelper<BlogPost>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('title', {
      header: 'Titre',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date de création',
      cell: (info) => formatDate(new Date(info.getValue())),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        return (
          <div className="flex items-center gap-2">
            <Button asChild className="bg-primary-50 text-black hover:bg-white">
              <Link to={`/admin/blogs/${info.row.original.slug}`}>Voir</Link>
            </Button>
          </div>
        );
      },
    }),
  ];

  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  return (
    data && (
      <div className="flex flex-col gap-2">
        <Button>
          <Link to={'/admin/blogs/new'}>Créer un blog post</Link>
        </Button>
        <Table
          title="Blog posts"
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
