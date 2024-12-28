import type { ChainStats } from '@zcorp/shared-typing-wheelz';
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

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H2 } from '../shared/typography/Typography';
type Props = {
  data: ChainStats;
};

export const ChainStatsChart = ({ data }: Props) => {
  const mergedData = data.evolutionOfVehicles.map((vehicleEntry) => {
    const transactionEntry = data.evolutionOfTransactions.find((t) => t.date === vehicleEntry.date);
    return {
      date: vehicleEntry.date,
      vehicles: vehicleEntry.value,
      transactions: transactionEntry ? transactionEntry.value : 0,
    };
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <H2>Evolution de la chaine</H2>
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
              name="Nombre de véhicules"
              dataKey="vehicles"
              stroke="#fd8012"
              strokeWidth={2}
              dot={{ r: 4, fill: '#fd8012' }}
              activeDot={{ r: 6, fill: '#fd8012' }}
            />
            <Line
              type="monotone"
              name="Nombre de transactions"
              dataKey="transactions"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ r: 4, fill: '#06b6d4' }}
              activeDot={{ r: 6, fill: '#06b6d4' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
