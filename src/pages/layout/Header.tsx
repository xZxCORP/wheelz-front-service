import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import BurgerMenu from '../../components/navigation/BurgerMenu';
import DropdownMenu from '../../components/navigation/DropdownMenu';
import { mainNavLinks } from '../../router/MainNavLinks';

const Header = () => {
  const links = mainNavLinks.map((link) => (
    <DropdownMenu title={link.title} links={link.links} key={link.title} />
  ));

  return (
    <header className="flex justify-center bg-secondary-100 shadow-md">
      <div className="flex w-full items-center justify-between p-4">
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
            className="text-2xl transition-colors hover:text-primary-500"
            aria-label="Profile"
          >
            <FaUser />
          </Link>

          <BurgerMenu className="md:hidden"></BurgerMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
