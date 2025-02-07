import type { IconType } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';
type Props = {
  title: string;
  icon: IconType;
  warning?: boolean;
};
export const NoticeCard = ({ title, icon, warning }: Props) => {
  const IconComponent = icon;
  return (
    <button className="flex h-auto min-h-[150px] w-full flex-col items-center justify-center rounded-lg  transition-colors hover:border-secondary-900 sm:h-1/2 sm:w-52">
      <IconComponent className="text-3xl sm:text-4xl" />
      <h3 className="text-center text-sm  sm:text-base">{title}</h3>
      {warning ? (
        <div className="flex items-center space-x-1 rounded bg-yellow-300 p-1 text-xs sm:text-sm">
          <FaTriangleExclamation className="shrink-0" />
          <p>Attention !</p>
        </div>
      ) : (
        <div className=" flex items-center space-x-1 rounded p-1 text-xs sm:text-sm">
          <FaCheckCircle className="shrink-0" />
          <p>Aucun problème</p>
        </div>
      )}
    </button>
  );
};
