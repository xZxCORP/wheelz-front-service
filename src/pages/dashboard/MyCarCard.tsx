import type { Vehicle } from '@zcorp/shared-typing-wheelz';

type CarCardProps = {
  id: string;
  vehicle: Vehicle;
  onClick: (id: string) => void;
};
export const MyCarCard = ({ id, vehicle, onClick }: CarCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex h-20 w-full cursor-pointer flex-wrap rounded border border-primary-300 bg-background p-2 shadow-sm transition-all hover:translate-x-2 hover:shadow-md"
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
