import type { TransactionStats } from '@zcorp/shared-typing-wheelz';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, CardContent, CardHeader } from '../../shared/Card';
import { H2 } from '../../shared/typography/Typography';
type Props = {
  data: TransactionStats;
};

export const TransactionStatsLineChart = ({ data }: Props) => {
  const mergedData = data.evolution.map((transactionEntry) => {
    const anomalyEntry = data.anomalies.find((t) => t.date === transactionEntry.date);
    return {
      date: transactionEntry.date,
      anomalies: anomalyEntry ? anomalyEntry.value : 0,
      transactions: transactionEntry ? transactionEntry.value : 0,
    };
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <H2>Evolution du nombre de transactions et d&apos;anomalies</H2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mergedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="date" stroke="#495057" />
            <YAxis stroke="#495057" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', borderColor: '#adb5bd' }}
              labelStyle={{ color: '#495057' }}
              itemStyle={{ color: '#343a40' }}
            />
            <Legend />
            <Line
              type="monotone"
              name="Nombre de transactions"
              dataKey="transactions"
              stroke="#fd8012"
              strokeWidth={2}
              dot={{ r: 4, fill: '#fd8012' }}
              activeDot={{ r: 6, fill: '#fd8012' }}
            />
            <Line
              type="monotone"
              name="Nombre d'anomalies"
              dataKey="anomalies"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 4, fill: '#ef4444' }}
              activeDot={{ r: 6, fill: '#ef4444' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
