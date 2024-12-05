import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import type { Control } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
};

export const SinisterInformationsFields = ({ control }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informations sur les sinistres</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <FormField
          control={control}
          name="sinisterInfos.count"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de sinistres</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de sinistres" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
