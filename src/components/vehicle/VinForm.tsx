import { useState } from 'react';
import { Button } from '../shared/button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../shared/form/Form';
import { Input } from '../shared/form/Input';
import { useForm } from 'react-hook-form';
import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { authTsr } from '../../clients/api/auth.api';

export const VinForm = () => {
  const form = useForm<Vehicle>({
    resolver: zodResolver(searchVehicleSchema),
    mode: 'onChange',
    defaultValues: {
      vin: ''
    }
  });

  // TODO - Create VIN type
  const [vin, setVin] = useState<string | null>(null);

  //if (!vehicle) return <LoadingAnimation />;
  const proutProutCamembert = (data) => {
    console.log("[RECHERCHE DU VEHICULE...]");
    console.log("data:", data);
    //...
  }

  return (
    <div className="flex w-full" >
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-40 w-full items-center justify-center rounded-lg bg-secondary-200 text-center font-bold md:w-40">
              <p>POUET POUET</p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => proutProutCamembert(data))}
                className="flex flex-col gap-4"
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
                <Button type="submit">Rechercher</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div >
  );
};
