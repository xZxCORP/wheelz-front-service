import { LogoutButton } from '../../main/auth/LogoutButton';
import { MainBurgerMenu } from '../../main/navigation/MainBurgerMenu';
import { WheelzIcon } from '../../shared/WheelzIcon';

export const AdminHeader = () => {
  return (
    <header className="bg-secondary-100 shadow-md">
      <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <WheelzIcon link="/admin" />

        <div className="flex gap-2">
          <LogoutButton />
          <MainBurgerMenu className="flex lg:hidden" />
        </div>
      </div>
    </header>
  );
};
