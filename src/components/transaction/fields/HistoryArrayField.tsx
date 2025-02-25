import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control, useFieldArray } from 'react-hook-form';

import { vehicleHistoryLabels } from '../../../types/vehicleLabels';
import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const HistoryArrayField = ({ control, onlyView }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'history',
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Historique</CardTitle>
      </CardHeader>
      <CardContent>
        {!onlyView && (
          <Button
            type="button"
            buttonStyle={{ color: 'secondary' }}
            onClick={() => append({ date: '', type: '' })}
          >
            Ajouter un historique
          </Button>
        )}
        {fields.map((field, index) => (
          <div key={field.id} className="flex w-full gap-4 space-y-2">
            <FormField
              control={control}
              name={`history.${index}.date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{vehicleHistoryLabels.date}</FormLabel>
                  <FormControl>
                    <Input type="date" className="w-full" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`history.${index}.type`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{vehicleHistoryLabels.type}</FormLabel>

                  <FormControl>
                    <Input className="w-full" {...field} placeholder={`Type`} />
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
