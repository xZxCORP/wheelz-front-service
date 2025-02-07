import type { Vehicle } from '@zcorp/shared-typing-wheelz';

type CarCardProps = {
  id: number;
  vehicle: Vehicle;
  onClick: (id: number) => void;
};
export const MyCarCard = ({ id, vehicle, onClick }: CarCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex h-20 w-full cursor-pointer flex-wrap rounded border border-primary-300 bg-primary-200 p-2 transition-all hover:translate-x-2"
    >
      <div className="flex w-full justify-between ">
        <div className="flex flex-wrap space-x-1">
          <p>{vehicle.features.brand}</p>
          <p>{vehicle.features.model}</p>
        </div>
        <p className="opacity-0 md:opacity-100">{vehicle.infos.firstSivRegistrationDate}</p>
      </div>
    </div>
  );
};
