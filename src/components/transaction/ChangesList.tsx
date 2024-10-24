import clsx from 'clsx';
import { FaArrowRight, FaTriangleExclamation } from 'react-icons/fa6';

import { H4 } from '../shared/typography/Typography';

type Props = {
  items: string[];
  title: string;
  type: 'risk' | 'issue';
};
export const ChangesList = ({ items, title, type }: Props) => {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <FaArrowRight size={16} className="text-secondary-500" />
        <H4 className="text-sm text-secondary-700">{title}</H4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={clsx('inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs', {
              'border-warning-200 bg-warning-50 text-warning-700': type === 'risk',
              'border-error-200 bg-error-50 text-error-700': type === 'issue',
            })}
          >
            <FaTriangleExclamation size={12} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
