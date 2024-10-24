import type { TransactionAction } from '@zcorp/shared-typing-wheelz';
import { useMemo } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';

import { Badge } from '../shared/badge/Badge';

interface Props {
  action: TransactionAction;
}

export const ActionBadge = ({ action }: Props) => {
  const actionToColor = useMemo(() => {
    switch (action) {
      case 'create': {
        return 'success';
      }
      case 'update': {
        return 'warning';
      }
      case 'delete': {
        return 'error';
      }
      default: {
        return 'success';
      }
    }
  }, [action]);
  const actionToIcon = useMemo(() => {
    switch (action) {
      case 'create': {
        return <FaPlus size={16} />;
      }
      case 'update': {
        return <GrUpdate size={16} />;
      }
      case 'delete': {
        return <FaTrash size={16} />;
      }
      default: {
        return <FaPlus size={16} />;
      }
    }
  }, [action]);
  return (
    <Badge badgeStyle={{ color: actionToColor }}>
      <div className="flex items-center gap-2">
        {actionToIcon}
        <span>{action.charAt(0).toUpperCase() + action.slice(1)}</span>
      </div>
    </Badge>
  );
};
