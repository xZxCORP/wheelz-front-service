import { LogoutButton } from '../../main/auth/LogoutButton';

export const AdminBottomActions = () => {
  return (
    <div className="flex flex-col gap-2">
      <LogoutButton variant="text" />
    </div>
  );
};
