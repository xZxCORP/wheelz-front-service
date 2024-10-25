import { WheelzIcon } from '../../shared/WheelzIcon';
import { AdminBottomActions } from './AdminBottomActions';
import { AdminLinks } from './AdminLinks';

export const AdminSidebar = () => {
  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between bg-secondary-400 p-4">
      <div className="flex flex-col gap-4">
        <WheelzIcon link="/admin" />
        <AdminLinks />
      </div>
      <AdminBottomActions />
    </div>
  );
};
