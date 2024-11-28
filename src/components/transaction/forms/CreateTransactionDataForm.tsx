import { zodResolver } from '@hookform/resolvers/zod';
import {
  type CreateVehicleTransactionData,
  createVehicleTransactionDataSchema,
} from '@zcorp/shared-typing-wheelz';
import { useForm } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';
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
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Informations générales du véhicule</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
              name="features.brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marque</FormLabel>
                  <FormControl>
                    <Input placeholder="Marque" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.model"
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
              name="features.cvPower"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Puissance CV</FormLabel>
                  <FormControl>
                    <Input placeholder="Puissance CV" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Couleur</FormLabel>
                  <FormControl>
                    <Input placeholder="Couleur" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.tvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type Variante Version</FormLabel>
                  <FormControl>
                    <Input placeholder="TVV" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.cnitNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro CNIT</FormLabel>
                  <FormControl>
                    <Input placeholder="Numéro CNIT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.receptionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de réception</FormLabel>
                  <FormControl>
                    <Input placeholder="Type de réception" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.technicallyAdmissiblePTAC"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PT techniquement admissible (kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="PTAC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.ptac"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PTAC (kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="PTAC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.ptra"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PTRA (kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="PTRA" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.ptService"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PT en service (kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="PT en service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.ptav"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PTAV (kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="PTAV" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features.category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie (CE)</FormLabel>
                  <FormControl>
                    <Input placeholder="Catégorie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

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
