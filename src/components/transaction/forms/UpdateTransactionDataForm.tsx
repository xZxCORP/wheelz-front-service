import { zodResolver } from '@hookform/resolvers/zod';
import {
  type CreateVehicleTransactionData,
  createVehicleTransactionDataSchema,
  type UpdateVehicleTransactionData,
} from '@zcorp/shared-typing-wheelz';
import { type GetVehicleParameters, getVehicleParametersSchema } from '@zcorp/wheelz-contracts';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { chainTsr } from '../../../clients/api/chain.api';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { dirtyValues } from '../../../utils/form';
import { baseCreateTransactionData } from '../../../utils/transaction';
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
import { H2 } from '../../shared/typography/Typography';
import { GeneralInformationsFields } from '../fields/GeneralInformationsFields';
type Props = {
  onSubmit?: (data: UpdateVehicleTransactionData) => void;
};

export const UpdateTransactionDataForm = ({ onSubmit }: Props) => {
  const [vin, setVin] = useState<string | undefined>();
  const { addSnackbar } = useSnackbarStore();

  const searchVehicleForm = useForm<GetVehicleParameters>({
    resolver: zodResolver(getVehicleParametersSchema),
    mode: 'onChange',
    defaultValues: {
      vin: '',
    },
  });
  const updateVehicleForm = useForm<CreateVehicleTransactionData>({
    resolver: zodResolver(createVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: baseCreateTransactionData,
  });
  const { data: previousVehiculeData, isError: noVehicleFound } =
    chainTsr.chain.getVehicleOfTheChain.useQuery({
      queryKey: ['vehicles', vin],
      queryData: {
        query: { vin },
      },
      enabled: !!vin,
    });
  const isDataFormAvailable = !!previousVehiculeData;
  const onVinChange = (data: GetVehicleParameters) => {
    setVin(data.vin);
  };
  const submitWithChanges = (data: CreateVehicleTransactionData) => {
    const dirtyFields = updateVehicleForm.formState.dirtyFields;
    const changedValues: Partial<CreateVehicleTransactionData> = dirtyValues(dirtyFields, data);
    const finalData: UpdateVehicleTransactionData = {
      vin: data.vin,
      changes: changedValues,
    };
    if (onSubmit) onSubmit(finalData);
  };
  useEffect(() => {
    if (isDataFormAvailable && previousVehiculeData) {
      updateVehicleForm.reset({
        vin: previousVehiculeData.body.vin,
        features: previousVehiculeData.body.features,
        infos: previousVehiculeData.body.infos,
        sinisterInfos: previousVehiculeData.body.sinisterInfos,
        history: previousVehiculeData.body.history,
        technicalControls: previousVehiculeData.body.technicalControls,
      });
      addSnackbar('Véhicule trouvé', 'success');
    }
  }, [addSnackbar, isDataFormAvailable, previousVehiculeData, updateVehicleForm]);
  useEffect(() => {
    if (noVehicleFound) {
      updateVehicleForm.reset({
        vin: undefined,
        features: undefined,
        infos: undefined,
        sinisterInfos: undefined,
        history: undefined,
        technicalControls: undefined,
      });
      addSnackbar('Véhicule non trouvé', 'error');
    }
  }, [addSnackbar, noVehicleFound, searchVehicleForm, updateVehicleForm]);
  return (
    <div>
      <H2>Chercher un véhicule à modifier</H2>
      <Form {...searchVehicleForm}>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={searchVehicleForm.handleSubmit(onVinChange)}
        >
          <FormField
            control={searchVehicleForm.control}
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
      {isDataFormAvailable && (
        <Form {...updateVehicleForm}>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={onSubmit ? updateVehicleForm.handleSubmit(submitWithChanges) : undefined}
          >
            <GeneralInformationsFields type="update" control={updateVehicleForm.control} />

            <Button type="submit">Soumettre</Button>
          </form>
        </Form>
      )}
    </div>
  );
};
