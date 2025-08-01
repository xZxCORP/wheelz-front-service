import { AuthStore } from '../../stores/useAuthStore';
import { WheelzIcon } from '../shared/WheelzIcon';
import { LogoutButton } from './auth/LogoutButton';
import { LoginRegisterPickers } from './auth/register/LoginRegisterPickers';

export const Header = () => {
  const { isAuthenticated } = AuthStore.use();

  const AccountCell = () => {
    if (isAuthenticated()) {
      return (
        <div className="flex gap-3">
          <LogoutButton />
        </div>
      );
    }
    return <LoginRegisterPickers />;
  };

  return (
    <header className="flex items-center justify-between border-b border-primary-200 bg-background px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <WheelzIcon />
      <div className="flex justify-start">
        <nav className="mx-auto hidden max-w-4xl grow justify-center space-x-4 lg:flex lg:space-x-6"></nav>
        <div className="ml-auto flex items-center lg:ml-0">
          <div className="mr-4 hidden lg:flex">
            <AccountCell />
          </div>
        </div>
      </div>
    </header>
  );
};
