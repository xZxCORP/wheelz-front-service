import clsx from 'clsx';
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaXmark } from 'react-icons/fa6';

import { mainNavLinks } from '../../router/MainNavLinks';
import Accordion from '../base/Accordion';

interface BurgerMenuProps {
  className?: string;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={clsx('relative', className)}>
      <button
        onClick={toggleMenu}
        type="button"
        className={clsx(
          'rounded-md p-2',
          'text-secondary-700 hover:text-primary-500',
          'hover:bg-secondary-100',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <CiMenuBurger className="size-6" />
      </button>

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
        <div className="flex h-full flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-secondary-700 hover:text-primary-500"
              aria-label="Close menu"
            >
              <FaXmark className="size-6" />
            </button>
          </div>
          <div className="grow overflow-y-auto">
            {mainNavLinks.map((link) => (
              <Accordion key={link.title} title={link.title} links={link.links} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
