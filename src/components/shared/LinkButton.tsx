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
        color: location.pathname.includes(link.url ?? '#') ? 'primary' : 'secondary',
      }}
      onClick={onClick}
      asChild
      className="w-full"
    >
      <Link to={link.url ?? '#'}>{link.title}</Link>
    </Button>
  );
};
