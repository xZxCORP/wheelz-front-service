import type { BlogCreate } from '@zcorp/wheelz-contracts';
import { useNavigate } from 'react-router-dom';
import z from 'zod';

import { blogTsr } from '../../../clients/api/blog.api';
import { BlogForm } from '../../../components/blog/components/BlogForm';
import { AuthStore } from '../../../stores/useAuthStore';

const formSchema = z.object({
  title: z.string().min(1),
  keywords: z.string().min(1),
  content: z.any(),
  publishedAt: z.string().optional(),
  imageUrl: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const CreateBlogPage = () => {
  const navigate = useNavigate();

  const createBlogMutation = blogTsr.contract.createBlogPost.useMutation({
    onSuccess: (data) => {
      navigate(`/admin/blogs/${data.body.data.slug}`);
    },
    onError: (error) => {
      console.error('Error when submitting :', error);
    },
  });

  const { user } = AuthStore.use();

  const onSubmit = (formData: FormSchema) => {
    const payload: BlogCreate = {
      title: formData.title,
      keywords: formData.keywords.split(' '),
      content: formData.content,
      publishedAt: String(formData.publishedAt),
      imageUrl: formData.imageUrl,
      authorId: user!.id,
    };

    createBlogMutation.mutate({
      body: payload,
    });
  };

  return <BlogForm onSubmit={(formData) => onSubmit(formData)} type="create" />;
};
