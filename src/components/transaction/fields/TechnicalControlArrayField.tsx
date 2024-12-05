import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { type Control, useFieldArray } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const TechnicalControlArrayField = ({ control, onlyView }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'technicalControls',
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Controle techniques</CardTitle>
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
                  <FormLabel>Date</FormLabel>
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
                  <FormLabel>Resultat</FormLabel>

                  <FormControl>
                    <Input className="w-full" {...field} placeholder={`Resultat`} />
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
                  <FormLabel>Resultat Raw</FormLabel>

                  <FormControl>
                    <Input className="w-full" {...field} placeholder={`Resultat Raw`} />
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
                  <FormLabel>Nature</FormLabel>

                  <FormControl>
                    <Input className="w-full" {...field} placeholder={`Nature`} />
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
                  <FormLabel>Km</FormLabel>

                  <FormControl>
                    <Input type="number" className="w-full" {...field} placeholder={`Km`} />
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
