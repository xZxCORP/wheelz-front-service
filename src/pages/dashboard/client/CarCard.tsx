type CarCardProps = {
  brand: string;
  model: string;
  year: number;
  mileage: number;
};
export const CarCard = ({ brand, model, year, mileage }: CarCardProps) => {
  return (
    <div
      className="bg-primary-300 border-primary-300 flex  h-20 w-full cursor-pointer flex-wrap rounded border px-2 transition-all hover:translate-x-2"
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
