import type { Vehicle } from '@zcorp/shared-typing-wheelz';

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H1 } from '../shared/typography/Typography';
import { IssuesList } from './issue/IssuesList';
import { SinisterHistory } from './sinister/SinisterHistory';
import { VehicleInfos } from './VehicleInfos';

type Props = {
  vehicle: Vehicle;
};

export const VehicleCard = ({ vehicle }: Props) => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <H1>
          {vehicle.constructorName} {vehicle.model}
        </H1>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <VehicleInfos vehicle={vehicle} />
          <div className="flex flex-col gap-2">
            <IssuesList
              items={vehicle.risks?.exterior || []}
              title="Risques extérieurs"
              type="risk"
            />
            <IssuesList
              items={vehicle.risks?.mechanical || []}
              title="Risques mécaniques"
              type="risk"
            />
            <IssuesList
              items={vehicle.risks?.generic || []}
              title="Risques génériques"
              type="risk"
            />
            <IssuesList
              items={vehicle.issues?.exterior || []}
              title="Problèmes extérieurs"
              type="issue"
            />
            <IssuesList
              items={vehicle.issues?.mechanical || []}
              title="Problèmes mécaniques"
              type="issue"
            />
            <IssuesList
              items={vehicle.issues?.generic || []}
              title="Problèmes génériques"
              type="issue"
            />
          </div>
          <SinisterHistory sinisters={vehicle.sinisters || []} />
        </div>
      </CardContent>
    </Card>
  );
};
