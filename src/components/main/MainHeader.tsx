import { mainNavLinks } from '../../router/MainNavLinks';
import { useAuthStore } from '../../stores/useAuthStore';
import { Button } from '../shared/button/Button';
import { WheelzIcon } from '../shared/WheelzIcon';
import { LoginRegisterPickers } from './auth/LoginRegisterPickers';
import { LogoutButton } from './auth/LogoutButton';
import { ProfileButton } from './profile/ProfileButton';

export const Header = () => {
  const { isAuthenticated, user } = useAuthStore();
  const links = mainNavLinks.map((link) => (
    <Button key={link.title} onClick={() => console.log('cool')}>
      {link.title}
    </Button>
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
    <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <WheelzIcon />
      {!isAuthenticated() && (
        <div className="flex justify-start">
          <nav className="mx-auto hidden max-w-4xl grow justify-center space-x-4 lg:flex lg:space-x-6">
            {links}
          </nav>
          <div className="ml-auto flex items-center lg:ml-0">
            <div className="mr-4 hidden lg:flex">
              <AccountCell />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
