import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control } from 'react-hook-form';

import { technicalControlLabels } from '../../../types/vehicleLabels';
import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const AttachedClientsIdsArrayField = ({ control, onlyView }: Props) => {
  // const { fields, append, remove } = useFormField({
  //   control,
  //   name: 'technicalControls',
  // });
  const onAddClient = () => {
    cons;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Clients attachés</CardTitle>
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
            Ajouter un controle technique
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
              <Button buttonStyle={{ color: 'error' }} onClick={() => remove(index)}>
                Supprimer
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
