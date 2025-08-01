import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control, useFieldArray } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa6';

import { uploadTsr } from '../../../clients/api/upload.api';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { technicalControlLabels } from '../../../types/vehicleLabels';
import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

// TODO - move to intended service
const deleteFile = async (fileUrl: string) => {
  const deleteResponse = await uploadTsr.upload.deleteFile.mutate({
    body: {
      url: fileUrl,
    },
  });
  return deleteResponse;
};

const fileName = (fileUrl: string) => {
  return fileUrl.split('/')[fileUrl.split('/').length - 1];
};

type TechnicalControlField = Vehicle['technicalControls'][number] & { id: string };

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const TechnicalControlArrayField = ({ control, onlyView }: Props) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'technicalControls',
  });
  const { addSnackbar } = useSnackbarStore();

  const onFileChange = async (
    files: FileList | null,
    field: TechnicalControlField,
    index: number
  ) => {
    if (!files) {
      return;
    }
    const file = files[0];
    if (!file) {
      return;
    }
    if (field.fileUrl) {
      await onDeleteFile(field.fileUrl);
    }
    const uploadResponse = await uploadTsr.upload.uploadFile.mutate({
      body: {
        file,
      },
      extraHeaders: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (uploadResponse.status === 201) {
      update(index, {
        ...field,
        fileUrl: uploadResponse.body.url,
      });
    }
  };

  const onDeleteFile = async (fileUrl: string) => {
    const deleteResponse = await deleteFile(fileUrl);
    console.log(deleteResponse);
    if (deleteResponse.status === 200) {
      addSnackbar('Fichier supprimé', 'warning');
    }
  };

  const onTechnicalControlDelete = async (index: number, fileUrl: string | null) => {
    remove(index);
    if (fileUrl) {
      await onDeleteFile(fileUrl);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contrôles techniques</CardTitle>
      </CardHeader>
      <CardContent>
        {!onlyView && (
          <Button
            type="button"
            buttonStyle={{ color: 'secondary' }}
            className="mb-6"
            onClick={() =>
              append({
                date: '',
                result: '',
                resultRaw: '',
                nature: '',
                km: 0,
                fileUrl: null,
              })
            }
          >
            Ajouter un contrôle technique
          </Button>
        )}

        {fields.map((field, index) => (
          <div key={field.id} className="flex w-full flex-col gap-4">
            {index != 0 && <div className="mt-6 w-full border-b border-secondary-200"></div>}
            <span className="underline">Contrôle technique N°{index + 1}</span>
            <FormField
              control={control}
              name={`technicalControls.${index}.date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{technicalControlLabels.date}</FormLabel>
                  <FormControl>
                    <Input type="date" className="w-full" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`technicalControls.${index}.result`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{technicalControlLabels.result}</FormLabel>

                  <FormControl>
                    <Input
                      className="w-full"
                      {...field}
                      placeholder={technicalControlLabels.result}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`technicalControls.${index}.resultRaw`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{technicalControlLabels.resultRaw}</FormLabel>

                  <FormControl>
                    <Input
                      className="w-full"
                      {...field}
                      placeholder={technicalControlLabels.resultRaw}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`technicalControls.${index}.nature`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{technicalControlLabels.nature}</FormLabel>

                  <FormControl>
                    <Input
                      className="w-full"
                      {...field}
                      placeholder={technicalControlLabels.nature}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`technicalControls.${index}.km`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{technicalControlLabels.km}</FormLabel>

                  <FormControl>
                    <Input
                      type="number"
                      className="w-full"
                      {...field}
                      placeholder={technicalControlLabels.km}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!onlyView && (
              <div className="flex items-center justify-between">
                <Input
                  type="file"
                  className="w-1/3"
                  {...field}
                  onChange={async (e) => {
                    await onFileChange(e?.target?.files, field, index);
                  }}
                />

                {field.fileUrl && (
                  <div className="flex w-1/2 items-center justify-around">
                    <span className="text-sm lg:text-base">
                      Fichier actuel : {fileName(field.fileUrl)}
                    </span>
                    <Button asChild>
                      <a href={field.fileUrl} target="_blank" rel="noreferrer">
                        Voir
                      </a>
                    </Button>
                  </div>
                )}

                <Button
                  buttonStyle={{ color: 'error' }}
                  onClick={async () => {
                    await onTechnicalControlDelete(index, field.fileUrl);
                  }}
                >
                  <FaTrash />
                </Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
