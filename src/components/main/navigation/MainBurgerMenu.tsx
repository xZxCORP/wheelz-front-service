import clsx from 'clsx';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { useAuthStore } from '../../../stores/useAuthStore';
import type { RouterLink } from '../../../types/navigation';
import { Accordion } from '../../shared/Accordion';
import { BurgerMenuButton } from '../../shared/BurgerMenuButton';
import { Button } from '../../shared/button/Button';
import { LoginRegisterPickers } from '../auth/LoginRegisterPickers';
import { LogoutButton } from '../auth/LogoutButton';
import { ProfileButton } from '../profile/ProfileButton';

interface Props {
  className?: string;
  links: RouterLink[];
}

export const MainBurgerMenu = ({ className, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();

  const AccountCell = () => {
    if (isAuthenticated()) {
      return (
        <div className="flex flex-col gap-2">
          <ProfileButton data={user!} />
          <LogoutButton variant="text" />
        </div>
      );
    }
    return <LoginRegisterPickers />;
  };

  const LinkCell = (link: RouterLink) => {
    if (link.links) {
      return (
        <Accordion
          onLinkClicked={toggleMenu}
          key={link.title}
          title={link.title}
          links={link.links}
        />
      );
    }
    return (
      <Button
        key={link.url}
        buttonStyle={{
          rounded: 'lg',
          size: 'lg',
          color: location.pathname.includes(link.url ?? '#') ? 'primary' : 'secondary',
        }}
        asChild
        onClick={toggleMenu}
      >
        <Link to={link.url ?? '#'}>{link.title}</Link>
      </Button>
    );
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={clsx('relative', className)}>
      <BurgerMenuButton onClick={toggleMenu} />
      <div
        className={clsx(
          'fixed inset-0 z-30 bg-secondary-100',
          'transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          }
        )}
      >
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="flex justify-end">
            <Button onClick={toggleMenu} buttonVariant="ghost">
              <FaXmark className="size-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {links.map((link) => LinkCell(link))}
            {AccountCell()}
          </div>
        </div>
      </div>
    </div>
  );
};
