import { Link } from 'react-router-dom';

import { Button } from '../../shared/button/Button';
import { LogoutButton } from '../../shared/LogoutButton';

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
