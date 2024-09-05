import { IconType } from 'react-icons';
import { CiCircleCheck, CiWarning } from 'react-icons/ci';

const NoticeCard = ({
  title,
  Icon,
  warning,
}: {
  title: string;
  Icon: IconType;
  warning?: boolean;
}) => {
  return (
    <button className="flex h-1/2 w-52  flex-col items-center justify-center space-y-3 rounded-lg border py-4 transition-colors hover:border-black">
      <Icon size={40} />
      <h3 className="font-semibold">{title}</h3>
      {warning ? (
        <div className="flex items-center space-x-1 rounded bg-yellow-300 p-1">
          <CiWarning />
          <p>Analyze</p>
        </div>
      ) : (
        <div className="flex items-center space-x-1 rounded bg-green-300 p-1">
          <CiCircleCheck />
          <p>Everything is fine !</p>
        </div>
      )}
    </button>
  );
};

export default NoticeCard;
