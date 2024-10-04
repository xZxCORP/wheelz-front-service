import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  toggleMenu: () => void;
  className?: string;
}

const BurgerMenu: React.FC<Props> = ({ children, isOpen, toggleMenu, className }) => {
  return (
    <div className={clsx('relative', className)}>
      <button
        onClick={toggleMenu}
        type="button"
        className={clsx(
          'rounded-md p-2',
          'text-gray-700 hover:text-primary-500',
          'hover:bg-gray-100',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <RxCross1 className="size-6" /> : <CiMenuBurger className="size-6" />}
      </button>

      <div
        className={clsx(
          'fixed inset-0 z-50 bg-white',
          'flex flex-col',
          'transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          }
        )}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold text-primary-500">WheelZ</h2>
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 text-gray-700 transition-colors hover:text-primary-500"
            aria-label="Close menu"
          >
            <RxCross1 className="size-6" />
          </button>
        </div>

        <div className="grow overflow-y-auto">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">{children}</nav>
        </div>

        <div className="border-t p-4">
          <p className="text-center text-sm text-gray-500">© 2024 WheelZ. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
