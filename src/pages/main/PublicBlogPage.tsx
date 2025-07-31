import { useParams } from "react-router-dom";
import { blogTsr } from "../../clients/api/blog.api";
import { ErrorContainer } from "../../components/shared/error/ErrorContainer";
import edjsHTML from "editorjs-html";
import type { OutputData } from "@editorjs/editorjs";
import parse from 'html-react-parser';
import { userTsr } from "../../clients/api/user.api";

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

    const {
    data: dataUser,
    isLoading: isUserLoading
  } = userTsr.users.getUserById.useQuery({
    queryKey: ['users', blog?.authorId],
    queryData: { params: { id: String(blog?.authorId) } },
    enabled: !!blog?.authorId,
  });

  const user = dataUser?.body.data;


  if (!blog && isLoading) {
    return <p className="text-center text-gray-500 mt-10">Chargement...</p>;
  }

  if (isError) {
    return <ErrorContainer errorMessage="Erreur lors du chargement du blog"/>;
  }

  if (!blog) {
    return <ErrorContainer errorCode="404" errorMessage="Blog not found" />;
  }

  const rawHtml = edjsParser.parse(blog.content as OutputData);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 md:mb-0">{blog.title}</h1>
          <p className="mb-4">{isUserLoading || !user ? 'Chargement' : `${user.firstname} - ${user.lastname}`}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.keywords?.map((kw: string, idx: number) => (
            <span
              key={idx}
              className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* Contenu (EditorJS HTML) */}
      <div className="prose max-w-none">
          {parse(rawHtml)}
      </div>

    </div>
  );
};


