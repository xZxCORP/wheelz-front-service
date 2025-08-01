import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { EditorField } from './EditorField';
import { uploadTsr } from '../../clients/api/upload.api';

const formSchema = z.object({
  title: z.string().min(1),
  keywords: z.string().min(1),
  content: z.any(),
  publishedAt: z.string().optional(),
  imageUrl: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

interface BlogFormProps {
  defaultValues?: Partial<FormSchema>;
  onSubmit: (data: FormSchema) => void;
  type: "create" | "update"
}

export const BlogForm = ({ defaultValues, onSubmit, type }: BlogFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const deleteFile = async (fileUrl: string) => {
    const deleteResponse = await uploadTsr.upload.deleteFile.mutate({
      body:{
        url: fileUrl
      }
    })
    return deleteResponse
 }

 const uploadFile = async (file: File) => {
    return await uploadTsr.upload.uploadFile.mutate({
      body:{
        file
      },
      extraHeaders: {
        'Content-Type': 'multipart/form-data',
      },
    })
 }

  const fileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files){
      return;
    }

    const file = e.target.files[0];
    if(!file){
      return
    }

    if (defaultValues?.imageUrl) {
      deleteFile(defaultValues.imageUrl);
    }

    const response = await uploadFile(file);

    if(response.status===201){
      setValue('imageUrl', response.body.url)
    }
  }

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  if (!defaultValues && type === 'update') {
    return <p>Chargement . . .</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit) } className="space-y-5">
      <div>
        <label>Titre</label>
        <input {...register('title')} className="w-full rounded border px-3 py-2" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label>Mots clés</label>
        <input
          {...register('keywords')}
          placeholder="Séparés par des espaces"
          className="w-full rounded border px-3 py-2"
        />
        {errors.keywords && <p className="text-red-500">{errors.keywords.message}</p>}
      </div>

      <div>
        <label>Date de publication</label>
        <input
          type="date"
          {...register('publishedAt')}
          className="w-full rounded border px-3 py-2"
        />
        {errors.publishedAt && (
          <p className="text-red-500">{errors.publishedAt.message}</p>
        )}
      </div>

      <div>
        <label>Image</label>
        <input
          type="file"
          {...register('imageUrl')}
          onChange={(e) => fileInputChange(e)}
        />
      </div>

      <div>
        <label>Contenu</label>
        <EditorField
          name="content"
          value={defaultValues ? defaultValues.content : undefined }
          onChange={(data) => setValue('content', data)}
        />
        {errors.content && <p className="text-red-500">Contenu requis</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded border border-gray-800 py-2 transition hover:bg-gray-200"
      >
        Enregistrer
      </button>
    </form>
  );
};
