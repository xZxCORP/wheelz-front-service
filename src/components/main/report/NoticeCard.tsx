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
    <button className="flex h-auto min-h-[150px] w-full flex-col items-center justify-center rounded-lg border border-primary-200 bg-background transition-colors hover:border-secondary-400 hover:shadow-md sm:h-1/2 sm:w-52">
      <IconComponent className="text-3xl text-primary-700 sm:text-4xl" />
      <h3 className="text-center text-sm text-primary-900 sm:text-base">{title}</h3>
      {warning ? (
        <div className="flex items-center space-x-1 rounded bg-warning-200 p-1 text-xs text-warning-800 sm:text-sm">
          <FaTriangleExclamation className="shrink-0" />
          <p>Attention !</p>
        </div>
      ) : (
        <div className="flex items-center space-x-1 rounded bg-success-200 p-1 text-xs text-success-800 sm:text-sm">
          <FaCheckCircle className="shrink-0" />
          <p>Aucun problème</p>
        </div>
      )}
    </button>
  );
};
