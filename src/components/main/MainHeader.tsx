import { mainNavLinks } from '../../router/MainNavLinks';
import { useAuthStore } from '../../stores/useAuthStore';
import { WheelzIcon } from '../shared/WheelzIcon';
import { LoginRegisterPickers } from './auth/register/LoginRegisterPickers';
import { LogoutButton } from './auth/LogoutButton';
import { DropdownMenu } from './navigation/DropdownMenu';
import { MainBurgerMenu } from './navigation/MainBurgerMenu';
import { ProfileButton } from './profile/ProfileButton';

export const Header = () => {
  const { isAuthenticated, user } = useAuthStore();
  const links = mainNavLinks.map((link) => (
    <DropdownMenu title={link.title} links={link.links} key={link.title} />
  ));

  const AccountCell = () => {
    if (isAuthenticated()) {
      return (
        <div className="flex gap-3">
          <ProfileButton data={user!} />
          <LogoutButton />
        </div>
      );
    }
    return <LoginRegisterPickers />;
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
          <MainBurgerMenu className="flex lg:hidden" links={mainNavLinks} />
        </div>
      </div>
    </header>
  );
};
