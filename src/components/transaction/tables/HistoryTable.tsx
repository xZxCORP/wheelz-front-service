import { createColumnHelper } from '@tanstack/react-table';
import type { VehicleHistoryItem } from '@zcorp/shared-typing-wheelz';

import { vehicleHistoryLabels } from '../../../types/vehicleLabels';
import { Table } from '../../admin/Table';

type Props = {
  data: VehicleHistoryItem[];
};
export const HistoryTable = ({ data }: Props) => {
  const columnHelper = createColumnHelper<VehicleHistoryItem>();
  const columns = [
    columnHelper.accessor('type', {
      header: vehicleHistoryLabels.type,
    }),
    columnHelper.accessor('date', {
      header: vehicleHistoryLabels.date,
    }),
  ];

  return (
    <div className="flex flex-col gap-2">
      <Table title="Historique" data={data} columns={columns}></Table>
    </div>
  );
};
