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
import { useForm, Controller } from 'react-hook-form';
import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

interface SearchFormValues {
    firstName: string;
    lastName: string;
    vin: string;
    immat: string;
    formuleNumber: string;
  }

export const VehicleSearchForm: React.FC = () => {
    const { handleSubmit, control } = useForm<SearchFormValues>();

  const onSubmit = (data: SearchFormValues) => {
    console.log('Form data:', data);
    // Ajoutez ici votre logique pour traiter les données du formulaire
  };

  return (
    <div className="flex w-full">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <div className="rounded-lg bg-primary-50 p-4 shadow-md md:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-40 w-full items-center justify-center rounded-lg bg-secondary-200 text-center font-bold md:w-40">
              <p>Recherche Véhicule</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="firstName"
                      placeholder="Prénom"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="lastName"
                      placeholder="Nom"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <label htmlFor="vin" className="block text-sm font-medium text-gray-700">
                  Vin
                </label>
                <Controller
                  name="vin"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="vin"
                      placeholder="Vin"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
                  Immatriculation
                </label>
                <Controller
                  name="immat"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="immat"
                      placeholder="Immatriculation"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700">
                  Numéro de formule
                </label>
                <Controller
                  name="formuleNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="formuleNumber"
                      placeholder="Numéro de formule"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-200"
                      {...field}
                    />
                  )}
                />
              </div>

              <Button type="submit" className="mt-4 w-full md:w-auto">
                Rechercher
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSearchForm;