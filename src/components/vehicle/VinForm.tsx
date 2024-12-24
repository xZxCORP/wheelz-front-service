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
import { getVehicleParametersSchema, type GetVehicleParameters } from '@zcorp/wheelz-contracts';
import { chainTsr } from '../../clients/api/chain.api';


export const VinForm = () => {
  const [vin, setVin] = useState<string | null>(null);
  const form = useForm<Vehicle>({
    resolver: zodResolver(getVehicleParametersSchema),
    mode: 'onChange',
    defaultValues: {
      vin: ''
    }
  });


  const { data } = chainTsr.chain.getVehicleOfTheChain.useQuery({
    queryKey: ['transactions', vin],
    queryData: {
      query: { vin: vin! },
    },
    enabled: !!vin
  });

  if (data) {
    console.log("hihihihihihi")
    if (data.status == 200) {
      console.log("Véchicule trouvé wahouuu :");
      console.log(data.body);
    }
    else {
      console.log("HEHHH...");
    }
  }

  //if (!vehicle) return <LoadingAnimation />;

  const submitForm = (formData: { vin: string }) => {
    console.log(formData);
    console.log("[RECHERCHE DU VEHICULE...]");
    console.log("vin:", formData.vin);
    setVin(formData.vin);
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
                <Button type="submit">Rechercher</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div >
  );
};
