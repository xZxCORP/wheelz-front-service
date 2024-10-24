import clsx from 'clsx';
import { FaTriangleExclamation } from 'react-icons/fa6';

import { P } from '../../shared/typography/Typography';

interface Props {
  text: string;
  type: 'risk' | 'issue';
}

export const IssueItem = ({ text, type }: Props) => (
  <span
    className={clsx('inline-flex items-center gap-1 rounded-md border px-2 py-1', {
      'border-warning-200 bg-warning-50 text-warning-700': type === 'risk',
      'border-error-200 bg-error-50 text-error-700': type === 'issue',
    })}
  >
    <FaTriangleExclamation size={12} />
    <P size="sm">{text}</P>
  </span>
);
