import { Link, useLocation } from 'react-router-dom';

import type { RouterLink } from '../../types/navigation';
import { Button } from './button/Button';

interface Props {
  link: RouterLink;
  onClick?: () => void;
  variant?: 'solid' | 'ghost' | 'outline';
}

export const LinkButton = ({ link, variant = 'outline', onClick }: Props) => {
  const location = useLocation();
  const isActive = location.pathname.includes(link.url ?? '#');

  return (
    <Button
      buttonVariant={variant}
      buttonStyle={{
        rounded: 'lg',
        size: 'lg',
        color: isActive ? 'accent' : 'secondary',
      }}
      onClick={onClick}
      asChild
      className={`w-full ${isActive ? 'border-background bg-background text-primary-900' : 'border-background/30 text-background hover:border-background/60'}`}
    >
      <Link to={link.url ?? '#'}>{link.title}</Link>
    </Button>
  );
};
