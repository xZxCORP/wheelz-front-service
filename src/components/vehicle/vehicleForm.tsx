import React, { useState }from 'react';
import { Button } from '../shared/button/Button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../shared/form/Form';
import { Input } from '../shared/form/Input'; 
import { useForm } from 'react-hook-form';
import { scraVehicleDataSchema} from '@zcorp/shared-typing-wheelz';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { transactionTsr } from '../../clients/api/transaction.api';

interface SearchFormValues {
    prenom: string;
    nom: string;
    vin: string;
    immat: string;
    numeroFormule: string;
  }

export const VehicleSearchForm: React.FC = () => {

    const form = useForm({
        resolver: zodResolver(scraVehicleDataSchema),
        mode: 'onChange',
        defaultValues: {
            prenom: '',
            nom: '',
            vin: '',
            immat: '',
            numeroFormule: '',
        },
    });

    const { mutate } = transactionTsr.transactions.scrapAndCreateTransaction.useMutation({
        onSuccess: () => {
          console.log('test');
        },
      });

  return (
    <Form {...form}>
        <div className="flex h-screen justify-center">
            <div className="w-full max-w-4xl space-y-6  ">
                <div className=" rounded-lg bg-primary-50 p-8  justify-center ">
                    <form
                    onSubmit={form.handleSubmit((data) => mutate({ body: data }))}
                    className="flex flex-col gap-6 justify-center items-center "
                    >
                        <FormField
                            control={form.control}
                            name="prenom"
                            render={({ field }) => (
                            <FormItem className="w-full max-w-lg self-center">
                                <FormLabel className="block text-sm font-medium text-gray-700">Prénom</FormLabel>
                                <FormControl>
                                <Input
                                    className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                                    placeholder="Prénom"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="nom"
                            render={({ field }) => (
                            <FormItem className="w-full max-w-lg self-center">
                                <FormLabel className="block text-sm font-medium text-gray-700">Nom</FormLabel>
                                <FormControl>
                                <Input
                                    className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                                    placeholder="Nom"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="vin"
                            render={({ field }) => (
                            <FormItem className="w-full max-w-lg self-center">
                                <FormLabel className="block text-sm font-medium text-gray-700">Vin</FormLabel>
                                <FormControl>
                                <Input
                                    className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                                    placeholder="Vin"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="immat"
                            render={({ field }) => (
                            <FormItem className="w-full max-w-lg self-center">
                                <FormLabel className="block text-sm font-medium text-gray-700">Immatriculation</FormLabel>
                                <FormControl>
                                <Input
                                    className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                                    placeholder="Immatriculation"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="numeroFormule"
                            render={({ field }) => (
                            <FormItem className="w-full max-w-lg self-center">
                                <FormLabel className="block text-sm font-medium text-gray-700">Numéro de formule</FormLabel>
                                <FormControl>
                                <Input
                                    className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                                    placeholder="Numéro de formule"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full max-w-lg self-center">
                            Rechercher
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </Form>
    
  );
};

export default VehicleSearchForm;