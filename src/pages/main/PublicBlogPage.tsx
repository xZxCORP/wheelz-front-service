import type { OutputData } from '@editorjs/editorjs';
import edjsHTML from 'editorjs-html';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { blogTsr } from '../../clients/api/blog.api';
import { userTsr } from '../../clients/api/user.api';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';

type PageParams = { id: string };

export const PublicBlogPage = () => {
  const { id } = useParams<PageParams>();
  const edjsParser = edjsHTML();

  const {
    data: blogData,
    isError,
    isLoading,
  } = blogTsr.contract.getOneBySlug.useQuery({
    queryKey: ['blog_posts', id],
    queryData: { params: { id: id! } },
    enabled: !!id,
  });

  const blog = blogData?.body.data;

  const { data: dataUser, isLoading: isUserLoading } = userTsr.users.getUserById.useQuery({
    queryKey: ['users', blog?.authorId],
    queryData: { params: { id: String(blog?.authorId) } },
    enabled: !!blog?.authorId,
  });

  const user = dataUser?.body.data;

  if (!blog && isLoading) {
    return <p className="mt-10 text-center text-gray-500">Chargement...</p>;
  }

  if (isError) {
    return <ErrorContainer errorMessage="Erreur lors du chargement du blog" />;
  }

  if (!blog) {
    return <ErrorContainer errorCode="404" errorMessage="Blog not found" />;
  }

  const rawHtml = edjsParser.parse(blog.content as OutputData);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="mb-6 h-64 w-full rounded-lg object-cover"
        />
      )}

      <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h1 className="mb-1 text-3xl font-bold md:mb-0">{blog.title}</h1>
          <p className="mb-4">
            {isUserLoading || !user ? 'Chargement' : `${user.firstname} - ${user.lastname}`}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.keywords?.map((kw: string, idx: number) => (
            <span key={idx} className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-800">
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* Contenu (EditorJS HTML) */}
      <div className="prose max-w-none">{parse(rawHtml)}</div>
    </div>
  );
};
