import type { TransactionStats } from '@zcorp/shared-typing-wheelz';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H2 } from '../shared/typography/Typography';
type Props = {
  data: TransactionStats;
};
export const TransactionStatusRepartitionPie = ({ data }: Props) => {
  const statusRepartition = [
    { name: 'En attente', value: data.repartition.status.pending, color: '#f59e0b' },
    { name: 'Traitée', value: data.repartition.status.finished, color: '#22c55e' },
    { name: 'Erreur', value: data.repartition.status.error, color: '#ef4444' },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <H2>Répartition des transactions par statut</H2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusRepartition}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {statusRepartition.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
