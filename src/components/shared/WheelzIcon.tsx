import { Link } from 'react-router-dom';
interface Props {
  link?: string;
}
export const WheelzIcon = ({ link = '/' }: Props) => {
  return (
    <Link
      to={link}
      className="flex items-center justify-center text-2xl font-bold text-primary-500 transition-colors hover:text-primary-600 sm:text-3xl"
    >
      WheelZ
    </Link>
  );
};
