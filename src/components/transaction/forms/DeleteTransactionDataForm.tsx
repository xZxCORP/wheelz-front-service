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
  onSubmit?: (data: DeleteVehicleTransactionData) => void;
  onlyView?: boolean;
  baseData?: DeleteVehicleTransactionData;
};
export const DeleteTransactionDataForm = ({ onSubmit, onlyView, baseData }: Props) => {
  const form = useForm<DeleteVehicleTransactionData>({
    resolver: zodResolver(deleteVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: baseData ?? {
      vin: '',
    },
    disabled: onlyView,
  });

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
      >
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
        {!onlyView && <Button type="submit">Soumettre Soumettre</Button>}
      </form>
    </Form>
  );
};
