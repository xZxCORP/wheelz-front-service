import type { VehicleTransaction } from '@zcorp/shared-typing-wheelz';

import { formatDate } from '../../utils/date';
import { Card, CardContent, CardFooter, CardHeader } from '../shared/Card';
import { InfoField } from '../shared/InfoField';
import { H1 } from '../shared/typography/Typography';
import { ActionBadge } from './ActionBadge';
import { StatusBadge } from './StatusBadge';

type Props = {
  transaction: VehicleTransaction;
};

export const TransactionCard = ({ transaction }: Props) => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <H1>Transaction {transaction.id}</H1>
            <InfoField
              label="Créée le"
              value={formatDate(new Date(transaction.timestamp))}
            ></InfoField>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <InfoField label="Action" value={<ActionBadge action={transaction.action} />} />
        <InfoField label="Status" value={<StatusBadge status={transaction.status} />} />
      </CardContent>
      <CardFooter>
        <InfoField label="Signature" value={transaction.dataSignature.signature} />
        <InfoField label="Algorithme" value={transaction.dataSignature.signAlgorithm} />
      </CardFooter>
    </Card>
  );
};
