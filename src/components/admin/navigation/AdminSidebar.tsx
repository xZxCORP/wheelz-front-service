import clsx from 'clsx';

import { WheelzIcon } from '../../shared/WheelzIcon';
import { AdminBottomActions } from './AdminBottomActions';
import { AdminLinks } from './AdminLinks';
type Props = {
  className?: string;
};
export const AdminSidebar = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        'bg-secondary-500 sticky top-0 flex h-screen flex-col justify-between p-4',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <WheelzIcon link="/admin" />
        <AdminLinks />
      </div>
      <AdminBottomActions />
    </div>
  );
};
