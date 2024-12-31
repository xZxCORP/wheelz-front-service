import type { TransactionStats } from '@zcorp/shared-typing-wheelz';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H2 } from '../shared/typography/Typography';
const COLORS = ['#f59e0b', '#22c55e', '#ef4444'];
type Props = {
  data: TransactionStats;
};
export const TransactionStatusRepartitionPie = ({ data }: Props) => {
  const statusRepartition = [
    { name: 'En attente', value: data.repartition.status.pending },
    { name: 'Traitée', value: data.repartition.status.finished },
    { name: 'Erreur', value: data.repartition.status.error },
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
              {statusRepartition.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
