import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import type { Control } from 'react-hook-form';

import { vehicleInfosLabels, vehicleLabels } from '../../../types/vehicleLabels';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
  type?: 'update' | 'create';
};

export const GeneralInformationsFields = ({ control, type = 'create' }: Props) => {
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
              <FormLabel>{vehicleLabels.vin}</FormLabel>
              <FormControl>
                <Input disabled={type === 'update'} placeholder={vehicleLabels.vin} {...field} />
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
              <FormLabel>{vehicleInfosLabels.holderCount}</FormLabel>
              <FormControl>
                <Input placeholder={vehicleInfosLabels.holderCount} {...field} />
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
              <FormLabel>{vehicleInfosLabels.firstRegistrationInFranceDate}</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder={vehicleInfosLabels.firstRegistrationInFranceDate}
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
              <FormLabel>{vehicleInfosLabels.firstSivRegistrationDate}</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder={vehicleInfosLabels.firstSivRegistrationDate}
                  {...field}
                />
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
              <FormLabel>{vehicleInfosLabels.licensePlate}</FormLabel>
              <FormControl>
                <Input placeholder={vehicleInfosLabels.licensePlate} {...field} />
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
              <FormLabel required={false}>{vehicleInfosLabels.sivConversionDate}</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder={vehicleInfosLabels.sivConversionDate}
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
