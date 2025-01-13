import { createColumnHelper } from '@tanstack/react-table';
import type { TechnicalControlItem } from '@zcorp/shared-typing-wheelz';

import { technicalControlLabels } from '../../../types/vehicleLabels';
import { Table } from '../../admin/Table';

type Props = {
  data: TechnicalControlItem[];
};
export const TechnicalControlTable = ({ data }: Props) => {
  const columnHelper = createColumnHelper<TechnicalControlItem>();
  const columns = [
    columnHelper.accessor('date', {
      header: technicalControlLabels.date,
    }),
    columnHelper.accessor('resultRaw', {
      header: technicalControlLabels.resultRaw,
    }),
    columnHelper.accessor('nature', {
      header: technicalControlLabels.nature,
    }),
    columnHelper.accessor('km', {
      header: technicalControlLabels.km,
    }),
  ];

  return (
    <div className="flex flex-col gap-2">
      <Table title="Controle techniques" data={data} columns={columns}></Table>
    </div>
  );
};
