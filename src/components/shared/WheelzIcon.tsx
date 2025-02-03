import { Link } from 'react-router-dom';

import wheelzLogo from '/wheelz_logo.svg';

import { useAuthStore } from '../../stores/useAuthStore';
interface Props {
  link?: string;
}
export const WheelzIcon = ({ link = '/' }: Props) => {
  const { user } = useAuthStore();

  return (
    <Link
      to={link}
      className="text-secondary-500 hover:text-secondary-700 flex items-center justify-center text-2xl font-bold transition-colors"
    >
      <img src={wheelzLogo} alt="Wheelz Logo" className="mr-2 w-14" />
      {!user && <h1 className="hidden md:block">WheelZ</h1>}
    </Link>
  );
};
