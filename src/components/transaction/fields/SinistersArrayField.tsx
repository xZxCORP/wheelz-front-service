import { type Control, useFieldArray } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { Checkbox } from '../../shared/form/Checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';
import { H3 } from '../../shared/typography/Typography';

type Props = {
  control: Control<any>;
  name: string;
};

export const SinistersArrayField = ({ control, name }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <>
      <Button
        type="button"
        buttonStyle={{ color: 'secondary' }}
        onClick={() =>
          append({
            date: null,
            primaryFactor: '',
            injuryType: '',
            collisionType: '',
            isWeekend: false,
            location: {
              description: '',
              coordinates: {
                latitude: 0,
                longitude: 0,
              },
            },
          })
        }
      >
        Ajouter un sinistre
      </Button>
      {fields.map((field, index) => (
        <div className="flex flex-col gap-3" key={field.id}>
          <H3>Sinistre {index + 1}</H3>
          <div className="flex flex-col gap-4">
            <FormField
              control={control}
              name={`${name}.${index}.date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} placeholder={`Date`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.primaryFactor`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facteur principal</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={`Facteur principal`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.injuryType`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de blessure</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={`Type de blessure`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.collisionType`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de collision</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={`Type de collision`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.isWeekend`}
              render={({ field }) => (
                <FormItem className="!flex-row">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Weekend?</FormLabel>

                  <FormMessage />
                </FormItem>
              )}
            />
            <H3>Position</H3>
            <FormField
              control={control}
              name={`${name}.${index}.location.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={`Description`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.location.coordinates.latitude`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      placeholder={`Latitude`}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${name}.${index}.location.coordinates.longitude`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      placeholder={`Longitude`}
                      onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button buttonStyle={{ color: 'error' }} onClick={() => remove(index)}>
            Supprimer
          </Button>
        </div>
      ))}
    </>
  );
};
