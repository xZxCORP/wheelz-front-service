import { IconType } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';

export const NoticeCard = ({
  title,
  Icon,
  warning,
}: {
  title: string;
  Icon: IconType;
  warning?: boolean;
}) => {
  return (
    <button className="flex h-auto min-h-[150px] w-full flex-col items-center justify-center space-y-3 rounded-lg border p-4 transition-colors hover:border-secondary-900 sm:h-1/2 sm:w-52">
      <Icon className="text-3xl sm:text-4xl" />
      <h3 className="text-center text-sm font-semibold sm:text-base">{title}</h3>
      {warning ? (
        <div className="flex items-center space-x-1 rounded bg-yellow-300 p-1 text-xs sm:text-sm">
          <FaTriangleExclamation className="shrink-0" />
          <p>Analyze</p>
        </div>
      ) : (
        <div className="flex items-center space-x-1 rounded bg-success-700 p-1 text-xs sm:text-sm">
          <FaCheckCircle className="shrink-0" />
          <p>Everything is fine !</p>
        </div>
      )}
    </button>
  );
};
