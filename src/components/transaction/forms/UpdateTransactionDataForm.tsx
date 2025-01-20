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
import { isApiResponse } from '../../../utils/errors';
import { clearEmpties, getDirtyValues } from '../../../utils/form';
import { baseCreateTransactionData } from '../../../utils/transaction';
import { Button } from '../../shared/button/Button';
import { ErrorContainer } from '../../shared/error/ErrorContainer';
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
import { HistoryArrayField } from '../fields/HistoryArrayField';
import { SinisterInformationsFields } from '../fields/SinisterInformationsFields';
import { TechnicalControlArrayField } from '../fields/TechnicalControlArrayField';
import { TechnicalInformationsFields } from '../fields/TechnicalInformationsFields';
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
  const {
    data: previousVehiculeData,
    isError: noVehicleFound,
    error,
  } = chainTsr.chain.getVehicleOfTheChain.useQuery({
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
    if (Object.keys(dirtyFields).length === 0) {
      addSnackbar('Aucun champ modifié', 'error');
      return;
    }
    const changedValuesObjects = getDirtyValues(dirtyFields, {
      features: data.features,
      infos: data.infos,
      sinisterInfos: data.sinisterInfos,
    });
    const cleanedValuesObjects = clearEmpties(changedValuesObjects);

    const isTechnicalControlArrayChanged =
      Array.isArray(dirtyFields.technicalControls) &&
      JSON.stringify(data.technicalControls) !==
        JSON.stringify(previousVehiculeData!.body.technicalControls);
    const isHistoryArrayChanged =
      Array.isArray(dirtyFields.history) &&
      JSON.stringify(data.history) !== JSON.stringify(previousVehiculeData!.body.history);

    const finalData: UpdateVehicleTransactionData = {
      vin: data.vin,
      changes: {
        ...cleanedValuesObjects,
        technicalControls: isTechnicalControlArrayChanged ? data.technicalControls : undefined,
        history: isHistoryArrayChanged ? data.history : undefined,
      },
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
  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }
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
            <SinisterInformationsFields control={updateVehicleForm.control} />
            <TechnicalInformationsFields control={updateVehicleForm.control} />
            <HistoryArrayField control={updateVehicleForm.control} />
            <TechnicalControlArrayField control={updateVehicleForm.control} />

            <Button type="submit">Soumettre</Button>
          </form>
        </Form>
      )}
    </div>
  );
};
