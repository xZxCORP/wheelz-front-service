import type { Status } from '@zcorp/shared-typing-wheelz';
import { useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
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
        return 'success';
      }
      case 'error': {
        return 'error';
      }

      default: {
        return 'success';
      }
    }
  }, [status]);
  const statusToIcon = useMemo(() => {
    switch (status) {
      case 'pending': {
        return <FaClock size={16} />;
      }
      case 'finished': {
        return <FaCheck size={16} />;
      }
      case 'error': {
        return <FaTimes size={16} />;
      }

      default: {
        return <FaCheck size={16} />;
      }
    }
  }, [status]);
  return (
    <Badge badgeStyle={{ color: statusToColor }}>
      <div className="flex items-center gap-2">
        {statusToIcon}
        <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    </Badge>
  );
};
