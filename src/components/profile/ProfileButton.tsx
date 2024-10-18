import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { Button } from '../base/Button';

export const ProfileButton = () => {
  return (
    <Button icon={<FaUser />}>
      <Link to="/profile">Profile</Link>
      {/* adding user data */}
    </Button>
  );
};
