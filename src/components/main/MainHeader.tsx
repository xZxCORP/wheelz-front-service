import { mainNavLinks } from '../../router/MainNavLinks';
import { useAuthStore } from '../../stores/useAuthStore';
import { WheelzIcon } from '../shared/WheelzIcon';
import { RegisterButtonTrigger } from './auth/RegisterButtonTrigger';
import { DropdownMenu } from './navigation/DropdownMenu';
import { MainBurgerMenu } from './navigation/MainBurgerMenu';
import { ProfileButton } from './profile/ProfileButton';

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const links = mainNavLinks.map((link) => (
    <DropdownMenu title={link.title} links={link.links} key={link.title} />
  ));

  const AccountCell = () => {
    if (isAuthenticated()) {
      return <ProfileButton />;
    }
    return <RegisterButtonTrigger />;
  };

  return (
    <header className="bg-secondary-100 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <WheelzIcon />
        <nav className="mx-auto hidden max-w-4xl grow justify-center space-x-4 lg:flex lg:space-x-6">
          {links}
        </nav>

        <div className="ml-auto flex items-center lg:ml-0">
          <div className="mr-4 hidden lg:flex">
            <AccountCell />
          </div>
          <MainBurgerMenu className="flex lg:hidden" />
        </div>
      </div>
    </header>
  );
};
