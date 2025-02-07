import type { IconType } from 'react-icons';

import type { ClientDashboardPages } from '../../../pages/dashboard/ClientDashboard';
import { Button } from './Button';

type Props = {
  id: ClientDashboardPages;
  active: boolean;
  onClick: (id: ClientDashboardPages) => void;
  Icon: IconType;
};
export const ToggleButton = ({ onClick, id, active, Icon }: Props) => {
  return (
    <Button
      onClick={() => onClick(id)}
      className={`${active ? 'pointer-events-none bg-primary-500' : 'bg-primary-300'}  size-14 text-black transition-transform hover:scale-105 hover:bg-primary-500 active:bg-primary-500`}
    >
      <Icon size={25} />
    </Button>
  );
};
