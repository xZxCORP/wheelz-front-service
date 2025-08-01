import { type BlogUpdate } from '@zcorp/wheelz-contracts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { blogTsr } from '../../../clients/api/blog.api';
import { BlogForm } from '../../../components/blog/components/BlogForm';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { AuthStore } from '../../../stores/useAuthStore';

const formSchema = z.object({
  title: z.string().min(1),
  keywords: z.string().min(1),
  content: z.any(),
  publishedAt: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;
type PageParams = { id: string };

export const EditBlogPage = () => {
  const { id } = useParams<PageParams>();
  const navigate = useNavigate();

  const { data: blogData, isError } = blogTsr.contract.getOneBySlug.useQuery({
    queryKey: ['blog_posts', id],
    queryData: { params: { id: id! } },
    enabled: !!id,
  });

  const updateBlogMutation = blogTsr.contract.updateBlogPost.useMutation({
    onSuccess: (data) => {
      navigate(`/admin/blogs/${data.body.data.slug}`);
    },
    onError: (error) => {
      console.error('Error when submitting :', error);
    },
  });

  const blog = blogData?.body.data;
  const { user } = AuthStore.use();

  const onSubmit = (formData: FormSchema) => {
    const payload: BlogUpdate = {
      title: formData.title,
      keywords: formData.keywords.split(' '),
      content: formData.content,
      publishedAt: String(formData.publishedAt),
      authorId: user!.id,
      imageUrl: blog?.imageUrl || '',
    };

    updateBlogMutation.mutate({
      params: { id: String(blog?.id) },
      body: payload,
    });
  };

  if (isError || !blog) {
    return <ErrorContainer errorMessage={"Impossible de charger l'article"} />;
  }

  return (
    <BlogForm
      defaultValues={{
        title: blog.title,
        keywords: blog.keywords.join(' '),
        content: blog.content,
        publishedAt: blog.publishedAt
          ? new Date(blog.publishedAt).toISOString().split('T')[0]
          : undefined,
      }}
      onSubmit={(formData) => onSubmit(formData)}
      type="update"
    />
  );
};
