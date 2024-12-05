import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import type { Control } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
};

export const GeneralInformationsFields = ({ control }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informations générales</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <FormField
          control={control}
          name="vin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>VIN</FormLabel>
              <FormControl>
                <Input placeholder="VIN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="infos.holderCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de propriétaires</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de propriétaires" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="infos.firstRegistrationInFranceDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de première inscription en France</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Date de première inscription en France"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="infos.firstSivRegistrationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de première inscription SIV</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Date de première inscription SIV" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="infos.licensePlate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plaque d&apos;immatriculation</FormLabel>
              <FormControl>
                <Input placeholder="Plaque d'immatriculation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="infos.sivConversionDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel required={false}>Date de conversion SIV</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Date de conversion SIV"
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
