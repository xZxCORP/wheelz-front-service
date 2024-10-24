import { type User } from '@zcorp/wheelz-contracts';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/button/Button';
type Props = {
  data: User;
};

export const ProfileButton = ({ data }: Props) => {
  return (
    <Button asChild>
      <Link to="/profile">
        <FaUser />
        {data.lastname} {data.firstname}
      </Link>
    </Button>
  );
};
