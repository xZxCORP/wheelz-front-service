import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/button/Button';

export const ProfileButton = () => {
  return (
    <Button asChild>
      <Link to="/profile">
        <FaUser />
        Profile
      </Link>
      {/* adding user data */}
    </Button>
  );
};
