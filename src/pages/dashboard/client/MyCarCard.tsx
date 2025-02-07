type CarCardProps = {
  id: number;
  brand: string;
  model: string;
  firstRegistrationDate: string;
  mileage: number;
  onClick: (id: number) => void;
};
export const MyCarCard = ({
  id,
  brand,
  model,
  firstRegistrationDate,
  mileage,
  onClick,
}: CarCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex h-20 w-full cursor-pointer flex-wrap rounded border border-primary-300 bg-primary-200 p-2 transition-all hover:translate-x-2"
    >
      <div className="flex w-full justify-between ">
        <div className="flex flex-wrap space-x-1">
          <p>{brand}</p>
          <p>{model}</p>
        </div>
        <p className="opacity-0 md:opacity-100">{firstRegistrationDate}</p>
      </div>
      <div className="flex w-full justify-between opacity-0 md:opacity-100 ">
        <h2>{mileage} km</h2>
      </div>
    </div>
  );
};
