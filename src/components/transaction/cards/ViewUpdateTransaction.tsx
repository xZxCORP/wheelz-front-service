import type { UpdateVehicleTransactionData, Vehicle } from '@zcorp/shared-typing-wheelz';

import {
  sinisterInfosLabels,
  vehicleFeaturesLabels,
  vehicleInfosLabels,
} from '../../../types/vehicleLabels';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { InfoField } from '../../shared/InfoField';
import { ViewUserById } from '../../users/ViewUserById';
import { HistoryTable } from '../tables/HistoryTable';
import { TechnicalControlTable } from '../tables/TechnicalControlTable';

type Props = {
  data: UpdateVehicleTransactionData;
};
export const ViewUpdateTransaction = ({ data }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {!!data.changes.infos && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Informations générales</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {Object.entries(data.changes.infos).map(([key, value]) => {
              const typedKey = key as keyof Vehicle['infos'];
              return <InfoField key={key} label={vehicleInfosLabels[typedKey]} value={value} />;
            })}
          </CardContent>
        </Card>
      )}
      {!!data.changes.features && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Informations techniques</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {Object.entries(data.changes.features).map(([key, value]) => {
              const typedKey = key as keyof Vehicle['features'];
              return <InfoField key={key} label={vehicleFeaturesLabels[typedKey]} value={value} />;
            })}
          </CardContent>
        </Card>
      )}
      {!!data.changes.sinisterInfos && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Infos sur les sinistres</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {Object.entries(data.changes.sinisterInfos).map(([key, value]) => {
              const typedKey = key as keyof Vehicle['sinisterInfos'];
              return <InfoField key={key} label={sinisterInfosLabels[typedKey]} value={value} />;
            })}
          </CardContent>
        </Card>
      )}
      {!!data.changes.history && (
        <Card className="w-full">
          <CardContent>
            <HistoryTable data={data.changes.history} />
          </CardContent>
        </Card>
      )}
      {!!data.changes.technicalControls && (
        <Card className="w-full">
          <CardContent>
            <TechnicalControlTable data={data.changes.technicalControls} />
          </CardContent>
        </Card>
      )}
      {!!data.changes.attachedClientsIds && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Clients attachés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {data.changes.attachedClientsIds.map((userId) => (
                <ViewUserById key={userId} userId={userId} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
