import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control, useFieldArray } from 'react-hook-form';

import { technicalControlLabels } from '../../../types/vehicleLabels';
import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

import { FaRegCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { Label } from '../../shared/form/Label';
import { IconFileInput } from '../../shared/form/IconFileInput';
import { uploadTsr } from '../../../clients/api/upload.api';
import { FaTrash } from 'react-icons/fa6';

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
            onClick={() =>
              append({
                date: '',
                result: '',
                resultRaw: '',
                nature: '',
                km: 0,
                fileUrl: null
              })
            }
          >
            Ajouter un contrôle technique
          </Button>
        )}
        {fields.map((field, index) => (
          <div key={field.id} className="flex w-full gap-4">
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
              <Input
                type="file"
                className="w-full"
                {...field}
                onChange={async (e)=>{
                  //TODO - checker si field.url est pas vide, si pas vide appeler deleteFile
                  if(!e.target.files){
                    return
                  }
                  const file = e.target.files[0]
                  if(!file){
                    return
                  }

                  const uploadResponse = await uploadTsr.upload.uploadFile.mutate({
                    body:{
                      file
                    },
                    extraHeaders: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                  if(uploadResponse.status===201 || uploadResponse.status===200){
                    update(index, {
                    ...field,
                    fileUrl: uploadResponse.body.url
                  })
                  }
                }}
              />
              )}
              {field.fileUrl && (
                <a href={field.fileUrl} target='_blank' onClick={()=>console.log(field.fileUrl)}>Voir</a>
              )}
              {!onlyView && (
              <Button asChild buttonStyle={{ color: 'error' }} onClick={()=>{
                //checker si field.url est pas vide, si pas vide appeler deleteFile
                remove(index)
              }}>
                <FaTrash />
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
