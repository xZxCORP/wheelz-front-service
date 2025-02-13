import clsx from 'clsx';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

import { AuthStore } from '../../../stores/useAuthStore';
import type { RouterLink } from '../../../types/navigation';
import { Accordion } from '../../shared/Accordion';
import { BurgerMenuButton } from '../../shared/BurgerMenuButton';
import { Button } from '../../shared/button/Button';
import { LinkButton } from '../../shared/LinkButton';
import { WheelzIcon } from '../../shared/WheelzIcon';
import { LogoutButton } from '../auth/LogoutButton';
import { LoginRegisterPickers } from '../auth/register/LoginRegisterPickers';
import { ProfileButton } from '../profile/ProfileButton';

interface Props {
  className?: string;
  links: RouterLink[];
}

export const MainBurgerMenu = ({ className, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = AuthStore.use();

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
          key={link.url}
          title={link.title}
          links={link.links}
        />
      );
    }
    return <LinkButton key={link.url} onClick={toggleMenu} link={link} />;
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
          <div className="mb-4">
            <WheelzIcon></WheelzIcon>
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
