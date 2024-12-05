import { zodResolver } from '@hookform/resolvers/zod';
import {
  type CreateVehicleTransactionData,
  createVehicleTransactionDataSchema,
} from '@zcorp/shared-typing-wheelz';
import { useForm } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { Form } from '../../shared/form/Form';
import { GeneralInformationsFields } from '../fields/GeneralInformationsFields';
type Props = {
  onSubmit: (data: CreateVehicleTransactionData) => void;
};

export const CreateTransactionDataForm = ({ onSubmit }: Props) => {
  const form = useForm<CreateVehicleTransactionData>({
    resolver: zodResolver(createVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: {
      vin: '',
      features: {
        brand: '',
        model: '',
        cvPower: 0,
        color: '',
        tvv: '',
        cnitNumber: '',
        receptionType: '',
        technicallyAdmissiblePTAC: 0,
        ptac: 0,
        ptra: 0,
        ptService: 0,
        ptav: 0,
        category: '',
        gender: '',
        ceBody: '',
        nationalBody: '',
        receptionNumber: '',
        displacement: 0,
        netPower: 0,
        energy: '',
        seatingNumber: 0,
        standingPlacesNumber: 0,
        sonorousPowerLevel: 0,
        engineSpeed: 0,
        co2Emission: 0,
        pollutionCode: '',
        powerMassRatio: 0,
      },
      infos: {
        holderCount: 0,
        firstRegistrationInFranceDate: '',
        firstSivRegistrationDate: '',
        licensePlate: '',
        sivConversionDate: '',
      },
      history: [],
      technicalControls: [],
      sinisterInfos: {
        count: 0,
        lastResolutionDate: '',
        lastSinisterDate: '',
      },
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <GeneralInformationsFields control={form.control} />

        {/* <Separator />
        <H2>Problèmes</H2>
        <RiskIssuesArrayField
          control={form.control}
          name="issues.exterior"
          buttonLabel="Ajouter un problème exterieur"
          placeholder="Problème exterieur"
        />
        <RiskIssuesArrayField
          control={form.control}
          name="issues.mechanical"
          buttonLabel="Ajouter un problème mécanique"
          placeholder="Problème mécanique"
        />
        <RiskIssuesArrayField
          control={form.control}
          name="issues.generic"
          buttonLabel="Ajouter un problème générique"
          placeholder="Problème générique"
        />

        <Separator />

        <H2>Risques</H2>
        <RiskIssuesArrayField
          control={form.control}
          name="risks.exterior"
          buttonLabel="Ajouter un risque exterieur"
          placeholder="Risque exterieur"
        />
        <RiskIssuesArrayField
          control={form.control}
          name="risks.mechanical"
          buttonLabel="Ajouter un risque mécanique"
          placeholder="Risque mécanique"
        />
        <RiskIssuesArrayField
          control={form.control}
          name="risks.generic"
          buttonLabel="Ajouter un risque générique"
          placeholder="Risque générique"
        />

        <Separator />

        <H2>Sinistres</H2>
        <SinistersArrayField control={form.control} name="sinisters" />

        <Separator /> */}

        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  );
};
