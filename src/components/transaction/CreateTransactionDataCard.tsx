import type { CreateVehicleTransactionData } from '@zcorp/shared-typing-wheelz';

import { VehicleCard } from '../vehicle/VehicleCard';

type Props = {
  data: CreateVehicleTransactionData;
};

export const CreateTransactionDataCard = ({ data }: Props) => {
  return <VehicleCard vehicle={data} />;
};
