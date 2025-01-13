import type { UpdateVehicleTransactionData, Vehicle } from '@zcorp/shared-typing-wheelz';

import { vehicleInfosLabels } from '../../../types/vehicleLabels';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';

type Props = {
  data: UpdateVehicleTransactionData;
};
export const ViewUpdateTransaction = ({ data }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {data.changes.infos &&
            Object.entries(data.changes.infos).map(([key, value]) => {
              const typedKey = key as keyof Vehicle['infos'];
              return (
                <div key={key} className="flex w-full gap-4">
                  <p className="rounded-md bg-secondary-700 p-2 text-secondary-200">
                    {vehicleInfosLabels[typedKey]}
                  </p>
                  <p className="rounded-md bg-secondary-700 p-2 font-bold text-secondary-200">
                    {value}
                  </p>
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
};
