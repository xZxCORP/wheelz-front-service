import { zodResolver } from '@hookform/resolvers/zod';
import {
  type DeleteVehicleTransactionData,
  deleteVehicleTransactionDataSchema,
} from '@zcorp/shared-typing-wheelz';
import { useForm } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';
type Props = {
  onSubmit: (data: DeleteVehicleTransactionData) => void;
};
export const DeleteTransactionDataForm = ({ onSubmit }: Props) => {
  const form = useForm<DeleteVehicleTransactionData>({
    resolver: zodResolver(deleteVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: {
      vin: '',
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
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
        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  );
};
