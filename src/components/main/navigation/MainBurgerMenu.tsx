import clsx from 'clsx';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

import { mainNavLinks } from '../../../router/MainNavLinks';
import { useAuthStore } from '../../../stores/useAuthStore';
import { Accordion } from '../../shared/Accordion';
import { BurgerMenuButton } from '../../shared/BurgerMenuButton';
import { Button } from '../../shared/button/Button';
import { ProfileButton } from '../profile/ProfileButton';
import { RegisterButtonTrigger } from '../auth/RegisterButtonTrigger';

interface Props {
  className?: string;
}

export const MainBurgerMenu = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const AccountCell = () => {
    if (isAuthenticated()) {
      return <ProfileButton />;
    }
    return <RegisterButtonTrigger />;
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={clsx('relative', className)}>
      <BurgerMenuButton onClick={toggleMenu} />
      <div
        className={clsx(
          'fixed inset-0 z-50 bg-secondary-100',
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
            {mainNavLinks.map((link) => (
              <Accordion key={link.title} title={link.title} links={link.links} />
            ))}
            {AccountCell()}
          </div>
        </div>
      </div>
    </div>
  );
};
