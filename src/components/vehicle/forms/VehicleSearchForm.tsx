import { zodResolver } from '@hookform/resolvers/zod';
import { scrapVehicleDataSchema } from '@zcorp/shared-typing-wheelz';
import type React from 'react';
import { useForm } from 'react-hook-form';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { useSnackbarStore } from '../../../stores/useSnackbar';
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

export const VehicleSearchForm: React.FC = () => {
  const { addSnackbar } = useSnackbarStore();
  const form = useForm({
    resolver: zodResolver(scrapVehicleDataSchema),
    mode: 'onChange',
    defaultValues: {
      prenom: '',
      nom: '',
      vin: '',
      immat: '',
      numeroFormule: '',
    },
  });

  const { mutate, isPending } = transactionTsr.transactions.scrapAndCreateTransaction.useMutation({
    onSuccess: (result) => {
      addSnackbar(result.body.message, 'success');
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutate({ body: data }))}
        className="flex flex-col items-center justify-center gap-6"
      >
        <h2 className="text-xl font-semibold">Rechercher et créer un véhicule</h2>
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vin</FormLabel>
              <FormControl>
                <Input placeholder="Vin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="immat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Immatriculation</FormLabel>
              <FormControl>
                <Input placeholder="Immatriculation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numeroFormule"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de formule</FormLabel>
              <FormControl>
                <Input placeholder="Numéro de formule" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Recherche en cours...' : 'Rechercher'}
        </Button>
      </form>
    </Form>
  );
};
