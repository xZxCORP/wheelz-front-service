import { Link } from 'react-router-dom';

import { AuthStore } from '../../stores/useAuthStore';
import { WheelZ } from '../main/home/icons/WheelZ';
interface Props {
  link?: string;
}
export const WheelzIcon = ({ link = '/' }: Props) => {
  const { user } = AuthStore.use();

  return (
    <Link
      to={link}
      className="flex items-center justify-center text-2xl font-bold text-secondary-500 transition-colors hover:text-secondary-700"
    >
      <WheelZ className="mr-2 w-14 text-black" />
      {!user && <h1 className="hidden md:block">WheelZ</h1>}
    </Link>
  );
};
