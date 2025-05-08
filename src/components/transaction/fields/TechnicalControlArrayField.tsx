import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control, useFieldArray } from 'react-hook-form';

import { technicalControlLabels } from '../../../types/vehicleLabels';
import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

import { FaFileInvoiceDollar, FaRegCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSnackbarStore } from '../../../stores/useSnackbar';

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const TechnicalControlArrayField = ({ control, onlyView }: Props) => {
  const { fields, append, remove } = useFieldArray({
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
              <>
              <Button onClick={() => addSnackbar('WIP - Invoice feature', 'warning')} className='flex items-center bg-transparent hover:bg-transparent hover:text-green-950'>
                <FaFileInvoiceDollar size={25} />
              </Button>
              <Button onClick={() => addSnackbar('TODO - Comment feature', 'error')} className='flex items-center bg-transparent hover:bg-transparent hover:text-green-950'>
                <FaRegCommentAlt size={25} />
              </Button>

              <Button buttonStyle={{ color: 'error' }} onClick={() => remove(index)}>
                Supprimer
              </Button>
              </>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
