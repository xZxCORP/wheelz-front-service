import { type Vehicle, vehicleFeaturesSchema } from '@zcorp/shared-typing-wheelz';
import type { Control } from 'react-hook-form';

import { vehicleFeaturesLabels } from '../../../types/vehicleLabels';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';
const nullableFields = new Set(['ptra', 'standingPlacesNumber', 'co2Emission', 'powerMassRatio']);

export const TechnicalInformationsFields = ({ control }: { control: Control<Vehicle> }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informations techniques</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {vehicleFeaturesSchema.keyof().options.map((key) => {
          const typedKey = key as keyof Vehicle['features'];
          return (
            <FormField
              key={key}
              control={control}
              name={`features.${typedKey}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required={!nullableFields.has(typedKey)}>
                    {vehicleFeaturesLabels[typedKey]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={vehicleFeaturesLabels[typedKey]}
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};
