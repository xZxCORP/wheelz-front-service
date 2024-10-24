import type { Status } from '@zcorp/shared-typing-wheelz';
import { useMemo } from 'react';
import { FaCheck, FaClock } from 'react-icons/fa6';

import { Badge } from '../shared/badge/Badge';

interface Props {
  status: Status;
}

export const StatusBadge = ({ status }: Props) => {
  const statusToColor = useMemo(() => {
    switch (status) {
      case 'pending': {
        return 'warning';
      }
      case 'finished': {
        return 'warning';
      }

      default: {
        return 'success';
      }
    }
  }, [status]);
  return (
    <Badge badgeStyle={{ color: statusToColor }}>
      <div className="flex items-center gap-2">
        {status === 'pending' ? <FaClock size={16} /> : <FaCheck size={16} />}
        <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    </Badge>
  );
};
