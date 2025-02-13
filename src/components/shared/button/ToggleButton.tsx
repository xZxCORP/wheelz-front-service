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
      // onClick={() => onClick(id)}
      // className={`${active ? 'pointer-events-none bg-primary-500' : 'bg-primary-300'} size-14 text-black transition-transform hover:scale-105 hover:bg-primary-500 active:bg-primary-500`}
      className={`${active ? 'pointer-events-none bg-secondary-500 font-semibold text-white' : 'bg-primary-100 text-black'}  size-14 transition-transform hover:scale-105  hover:bg-primary-50 active:bg-primary-500`}
      asChild
    >
      <Link to={id}>
        <Icon size={25} />
      </Link>
    </Button>
  );
};
