import type { DeleteVehicleTransactionData } from '@zcorp/shared-typing-wheelz';

import { Card, CardContent } from '../shared/Card';
import { InfoField } from '../shared/InfoField';

type Props = {
  data: DeleteVehicleTransactionData;
};

export const DeleteTransactionDataCard = ({ data }: Props) => {
  return (
    <Card>
      <CardContent>
        <InfoField label="VIN" value={data.vin} />
      </CardContent>
    </Card>
  );
};
