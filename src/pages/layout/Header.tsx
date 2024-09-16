import DropdownMenu from '../../components/DropdownMenu';
import BurgerMenu from '../../components/BurgerMenu';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MainNavLinks } from '../../router/MainNavLinks';

const Header = () => {


  const links = MainNavLinks.map((link) =>
    <DropdownMenu title={link.title} links={link.links} />
  );


  return (
    <div id="header" className="flex w-full justify-between items-center bg-secondary-100 p-4 text-lg">
      <h1 className="text-3xl text-primary-500">WheelZ</h1>

      <nav className="hidden md:flex w-2/3 justify-around items-center">
        {links}
      </nav>

      <BurgerMenu children={links} classes={"ml-auto mr-6"} />

      <Link
        to='#'
        className="text-3xl"
      >
        <CgProfile />
      </Link>
    </div>
  );
};

export default Header;
