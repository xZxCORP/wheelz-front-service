type CarCardProps = {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  onClick: (id: number) => void;
};
export const CarCard = ({ id, brand, model, year, mileage, onClick }: CarCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="bg-primary-200 border-primary-300 flex h-20 w-full cursor-pointer flex-wrap rounded border p-2 transition-all hover:translate-x-2"
      key={'i'}
    >
      <div className="flex w-full justify-between ">
        <div className="flex flex-wrap space-x-1">
          <h2 className="font-bold">{brand}</h2>
          <h3>{model}</h3>
        </div>
        <p className="opacity-0 md:opacity-100">{year}</p>
      </div>
      <div className="flex w-full justify-between opacity-0 md:opacity-100 ">
        <h2 className="font-bold">{mileage} km</h2>
      </div>
    </div>
  );
};
