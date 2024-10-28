import { zodResolver } from '@hookform/resolvers/zod';
import {
  type CreateVehicleTransactionData,
  createVehicleTransactionDataSchema,
} from '@zcorp/shared-typing-wheelz';
import { useForm } from 'react-hook-form';

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
import { Separator } from '../../shared/Separator';
import { H2 } from '../../shared/typography/Typography';
import { RiskIssuesArrayField } from '../fields/RisksIssuesArrayField';
import { SinistersArrayField } from '../fields/SinistersArrayField';
type Props = {
  onSubmit: (data: CreateVehicleTransactionData) => void;
};

export const CreateTransactionDataForm = ({ onSubmit }: Props) => {
  const form = useForm<CreateVehicleTransactionData>({
    resolver: zodResolver(createVehicleTransactionDataSchema),
    mode: 'onChange',
    defaultValues: {
      vin: '',
      constructorName: '',
      model: '',
      year: 0,
      issues: {
        exterior: [],
        generic: [],
        mechanical: [],
      },
      risks: {
        exterior: [],
        generic: [],
        mechanical: [],
      },
      sinisters: [],
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <H2>Informations générales du véhicule</H2>
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
        <FormField
          control={form.control}
          name="constructorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du constructeur</FormLabel>
              <FormControl>
                <Input placeholder="Nom du constructeur" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modèle</FormLabel>
              <FormControl>
                <Input placeholder="Modèle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Année</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Année"
                  {...field}
                  onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
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

        <Separator />

        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  );
};
