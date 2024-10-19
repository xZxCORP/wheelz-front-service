import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { Button } from '../base/button/Button';

export const ProfileButton = () => {
  return (
    <Button leftIcon={<FaUser />}>
      <Link to="/profile">Profile</Link>
      {/* adding user data */}
    </Button>
  );
};
