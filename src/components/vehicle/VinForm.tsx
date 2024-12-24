import { useState } from 'react';
import { Button } from '../shared/button/Button';
import { useNavigate } from 'react-router-dom';
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
import { getVehicleParametersSchema, type GetVehicleParameters } from '@zcorp/wheelz-contracts';
import { chainTsr } from '../../clients/api/chain.api';
import { exhaustiveGuard, isFetchError } from '@ts-rest/react-query/v5';


export const VinForm = () => {
  const [vin, setVin] = useState<string | null>(null);
  const navigate = useNavigate();
  const form = useForm<Vehicle>({
    resolver: zodResolver(getVehicleParametersSchema),
    mode: 'onChange',
    defaultValues: {
      vin: ''
    }
  });

  const { data, error, isLoading } = chainTsr.chain.getVehicleOfTheChain.useQuery({
    queryKey: ['vehicles', vin],
    queryData: {
      query: { vin: vin ?? undefined },
    },
    enabled: !!vin,
  })


  const submitForm = (formData: { vin: string }) => {

    console.log(formData);
    console.log("[RECHERCHE DU VEHICULE...]");
    console.log("vin:", formData.vin);
    setVin(formData.vin);
  }

  if (error) {
    if (isFetchError(error)) {
      return <div>We could not retrieve this post. Please check your internet connection.</div>;
    }

    if (error.status === 404) {
      return <div>Post not found</div>;
    }

  }
  else if (data) {
    // navigate
    console.log("NO ERROR:");
    console.log(data);
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
                onSubmit={form.handleSubmit((formData) => submitForm(formData))}
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
                <Button disabled={isLoading} type="submit">
                  {isLoading ? "Chargement..." : "Rechercher"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div >
  );

}
