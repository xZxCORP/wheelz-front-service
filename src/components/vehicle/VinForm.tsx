import { zodResolver } from '@hookform/resolvers/zod';
import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { getVehicleParametersSchema } from '@zcorp/wheelz-contracts';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { chainTsr } from '../../clients/api/chain.api';
import { useSnackbarStore } from '../../stores/useSnackbar';
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

export const VinForm = () => {
  const [vin, setVin] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addSnackbar } = useSnackbarStore();
  const form = useForm<Vehicle>({
    resolver: zodResolver(getVehicleParametersSchema),
    mode: 'onChange',
    defaultValues: {
      vin: '',
    },
  });

  // Called when vin is set
  const { data, error, isLoading } = chainTsr.chain.getVehicleOfTheChain.useQuery({
    queryKey: ['vehicles', vin],
    queryData: {
      query: { vin: vin ?? undefined },
    },
    enabled: !!vin,
  });

  const submitForm = (formData: { vin: string }) => {
    setVin(formData.vin);
  };

  // Data / error handling
  useEffect(() => {
    if (error) {
      addSnackbar(error.body?.message ?? "Une erreur s'est produite", 'error');
    } else if (data) {
      // Vehicle data still needs to be sent to report component
      navigate('/report');
    }
  }, [error, data, navigate, addSnackbar]);

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          {error ? (<div className="flex flex-col justify-center items-center w-full">
            <span className="mb-4">Le véhicule n'a pas pu être trouvé. Vous allez être redirigé vers un formulaire plus complet.</span>
            <Link to="/search" style={{ textDecoration: 'none' }}>
              <Button>OK</Button>
            </Link>
          </div>)
            : (
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
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
                      {isLoading ? 'Chargement...' : 'Rechercher'}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
