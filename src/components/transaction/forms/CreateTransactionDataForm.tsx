import { zodResolver } from '@hookform/resolvers/zod';
import {
  type CreateVehicleTransactionData,
  createVehicleTransactionDataSchema,
  vehicleFixture,
} from '@zcorp/shared-typing-wheelz';
import { useForm } from 'react-hook-form';

import { baseCreateTransactionData } from '../../../utils/transaction';
import { Button } from '../../shared/button/Button';
import { Form } from '../../shared/form/Form';
import { AttachedClientsIdsArrayField } from '../fields/AttachedClientsIdsArrayField';
import { GeneralInformationsFields } from '../fields/GeneralInformationsFields';
import { HistoryArrayField } from '../fields/HistoryArrayField';
import { SinisterInformationsFields } from '../fields/SinisterInformationsFields';
import { TechnicalControlArrayField } from '../fields/TechnicalControlArrayField';
import { TechnicalInformationsFields } from '../fields/TechnicalInformationsFields';
type Props = {
  onSubmit?: (data: CreateVehicleTransactionData) => void;
  onlyView?: boolean;
  baseData?: CreateVehicleTransactionData;
  allowRapidFill?: boolean;
};

export const CreateTransactionDataForm = ({
  onSubmit,
  onlyView,
  baseData = baseCreateTransactionData,
  allowRapidFill,
}: Props) => {
  const form = useForm<CreateVehicleTransactionData>({
    resolver: zodResolver(createVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: baseData,
    disabled: onlyView,
  });
  const onLoadQuickFill = () => {
    form.reset(vehicleFixture);
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
      >
        {!onlyView && allowRapidFill && (
          <Button onClick={onLoadQuickFill} buttonStyle={{ color: 'secondary' }} type="button">
            Remplir rapidement
          </Button>
        )}
        <GeneralInformationsFields control={form.control} />
        <TechnicalInformationsFields control={form.control} />
        <SinisterInformationsFields control={form.control} />
        <HistoryArrayField onlyView={onlyView} control={form.control} />
        <TechnicalControlArrayField onlyView={onlyView} control={form.control} />
        <AttachedClientsIdsArrayField onlyView={onlyView} control={form.control} />

        {!onlyView && <Button type="submit">Soumettre</Button>}
      </form>
    </Form>
  );
};
