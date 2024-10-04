import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import BurgerMenu from '../../components/BurgerMenu';
import DropdownMenu from '../../components/DropdownMenu';
import { MainNavLinks } from '../../router/MainNavLinks';

const Header = () => {
  const links = MainNavLinks.map((link) => (
    <DropdownMenu title={link.title} links={link.links} key={link.title} />
  ));

  return (
    <div id="header" className="flex w-full justify-between bg-secondary-100 text-lg">
      <h1 className="text-3xl text-primary-500 m-4">WheelZ</h1>

      <nav className="hidden md:flex w-2/3 justify-around">
        {links}
      </nav>

      <BurgerMenu classes={'ml-auto mr-6'}>{links}</BurgerMenu>

      <Link
        to='#'
        className="text-3xl m-4"
      >
        <CgProfile />
      </Link>
    </div>
  );
};

export default Header;
