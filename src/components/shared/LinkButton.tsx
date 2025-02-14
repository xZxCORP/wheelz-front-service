import { Link, useLocation } from 'react-router-dom';

import type { RouterLink } from '../../types/navigation';
import { Button } from './button/Button';

interface Props {
  link: RouterLink;
  onClick?: () => void;
  variant?: 'solid' | 'ghost';
}

export const LinkButton = ({ link, variant = 'solid', onClick }: Props) => {
  const location = useLocation();

  return (
    <Button
      buttonVariant={variant}
      buttonStyle={{
        rounded: 'lg',
        size: 'lg',
      }}
      onClick={onClick}
      asChild
      className={`w-full ${location.pathname.includes(link.url ?? '#') ? 'bg-primary-200' : 'bg-primary-100'}`}
    >
      <Link to={link.url ?? '#'}>{link.title}</Link>
    </Button>
  );
};
