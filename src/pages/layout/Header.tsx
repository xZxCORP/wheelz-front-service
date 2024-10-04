import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import BurgerMenu from '../../components/BurgerMenu';
import DropdownMenu from '../../components/DropdownMenu';
import { mainNavLinks } from '../../router/MainNavLinks';

const Header: React.FC = () => {
  const links = mainNavLinks.map((link) => (
    <DropdownMenu title={link.title} links={link.links} key={link.title} />
  ));

  return (
    <header className="bg-secondary-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-3xl font-bold text-primary-500 transition-colors hover:text-primary-600"
          >
            WheelZ
          </Link>

          <nav className="hidden space-x-6 md:flex">{links}</nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-2xl text-gray-700 transition-colors hover:text-primary-500"
              aria-label="Profile"
            >
              <CgProfile />
            </Link>

            <BurgerMenu className="md:hidden"></BurgerMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
