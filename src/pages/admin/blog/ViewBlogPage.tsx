import { Link, useParams } from 'react-router-dom';

import { blogTsr } from '../../../clients/api/blog.api';
import { AdminPanel } from '../../../components/shared/AdminPanel';
import { AdminViewTable } from '../../../components/shared/AdminViewTable';
import { Button } from '../../../components/shared/button/Button';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  id: string;
};

export const ViewBlogPage = () => {
  const { id } = useParams<PageParams>();
  const { data, error } = blogTsr.contract.getOneBySlug.useQuery({
    queryKey: ['blog_posts', id],
    queryData: {
      params: { id: id! },
    },
  });

  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  const blog = data?.body.data;

  const rows = [
    { label: 'id', value: blog?.id },
    { label: 'Titre', value: blog?.title },
    { label: 'Keywords', value: blog?.keywords.join(', ') },
    { label: 'slug', value: blog?.slug },
    { label: 'Date de création', value: blog?.createdAt.toLocaleString() },
  ];

  const contentRow = [{ label: 'Content', value: blog?.content }];

  return (
    data && (
      <div className="mx-10 flex w-full flex-col px-20">
        <div className="mb-10 flex flex-row justify-between">
          <h2 className="text-3xl font-bold">{blog?.title}</h2>

          <div>
            <Button asChild className="mr-1">
              <Link to={`/admin/blogs/${blog?.slug}/edit`}>Modifier</Link>
            </Button>
            <Button>Supprimer</Button>
          </div>
        </div>

        <AdminPanel name="Informations générales" className="mb-10">
          <AdminViewTable rows={rows} />
        </AdminPanel>

        {/* <AdminPanel name="Contenu">
          <AdminViewTable rows={contentRow} />
        </AdminPanel> */}
      </div>
    )
  );
};
