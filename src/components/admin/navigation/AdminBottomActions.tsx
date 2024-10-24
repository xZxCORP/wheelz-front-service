import { Link } from 'react-router-dom';

import { LogoutButton } from '../../main/auth/LogoutButton';
import { Button } from '../../shared/button/Button';

export const AdminBottomActions = () => {
  return (
    <div className="flex flex-col gap-2">
      <LogoutButton variant="text" />
      <Button buttonStyle={{ size: 'lg' }} asChild>
        <Link to="/">Retour au site</Link>
      </Button>
    </div>
  );
};
