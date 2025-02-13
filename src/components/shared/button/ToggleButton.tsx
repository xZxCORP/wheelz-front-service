import { useMemo } from 'react';
import type { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

import { Button } from './Button';

type Props = {
  id: any;

  Icon: IconType;
};
export const ToggleButton = ({ id, Icon }: Props) => {
  const location = useLocation();
  const active = useMemo(() => {
    const urlParts = location.pathname.split('/');
    return urlParts.includes(id);
  }, [id, location.pathname]);
  return (
    <Button
      className={`${active ? 'bg-secondary-500 pointer-events-none font-semibold text-white' : 'bg-primary-200 text-black'}  hover:bg-primary-50 active:bg-primary-500 size-14  transition-transform hover:scale-105`}
      asChild
    >
      <Link to={id}>
        <Icon size={25} />
      </Link>
    </Button>
  );
};
