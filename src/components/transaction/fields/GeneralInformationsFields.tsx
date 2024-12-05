import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import type { Control } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<Vehicle>;
};

export const GeneralInformationsFields = ({ control }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informations générales du véhicule</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
          name="features.ptra"
          render={({ field }) => (
            <FormItem>
              <FormLabel required={false}>PTRA (kg)</FormLabel>
              <FormControl>
                <Input placeholder="PTRA" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
        <FormField
          control={control}
          name="features.gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre (National)</FormLabel>
              <FormControl>
                <Input placeholder="Genre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.ceBody"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carosserie (CE)</FormLabel>
              <FormControl>
                <Input placeholder="Carosserie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.nationalBody"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carosserie (National)</FormLabel>
              <FormControl>
                <Input placeholder="Carosserie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.receptionNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de réception</FormLabel>
              <FormControl>
                <Input placeholder="Numéro de réception" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.displacement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cylindrée (cm3)</FormLabel>
              <FormControl>
                <Input placeholder="Cylindrée" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.netPower"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Puissance nette max (kW)</FormLabel>
              <FormControl>
                <Input placeholder="Puissance nette max" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.energy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Energie</FormLabel>
              <FormControl>
                <Input placeholder="Energie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.seatingNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Places assises</FormLabel>
              <FormControl>
                <Input placeholder="Places assises" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.standingPlacesNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel required={false}>Places debout</FormLabel>
              <FormControl>
                <Input placeholder="Places debout" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.sonorousPowerLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Niveau sonore (dB(A))</FormLabel>
              <FormControl>
                <Input placeholder="Niveau sonore" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.engineSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vitesse moteur (km/h)</FormLabel>
              <FormControl>
                <Input placeholder="Vitesse moteur" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.co2Emission"
          render={({ field }) => (
            <FormItem>
              <FormLabel required={false}>CO2 (g/km)</FormLabel>
              <FormControl>
                <Input placeholder="CO2" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.pollutionCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pollution (g/km)</FormLabel>
              <FormControl>
                <Input placeholder="Pollution" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="features.powerMassRatio"
          render={({ field }) => (
            <FormItem>
              <FormLabel required={false}>Rapport puissance/masse (kg/kg)</FormLabel>
              <FormControl>
                <Input placeholder="Rapport puissance/masse" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
