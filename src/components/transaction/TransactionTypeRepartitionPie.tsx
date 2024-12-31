import type { TransactionStats } from '@zcorp/shared-typing-wheelz';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H2 } from '../shared/typography/Typography';
const COLORS = ['#22c55e', '#06b6d4', '#ef4444'];
type Props = {
  data: TransactionStats;
};
export const TransactionTypeRepartitionPie = ({ data }: Props) => {
  const typeRepartition = [
    { name: 'Création', value: data.repartition.type.create },
    { name: 'Modification', value: data.repartition.type.update },
    { name: 'Suppression', value: data.repartition.type.delete },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <H2>Répartition des transactions par type</H2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={typeRepartition}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {typeRepartition.map((_, index) => (
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
