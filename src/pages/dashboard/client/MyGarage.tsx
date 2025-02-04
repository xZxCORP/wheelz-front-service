import { CarCard } from './CarCard';

export const MyGarage = () => {
  return (
    <div className="flex size-full">
      <div className="flex w-1/4 flex-col justify-start space-y-1">
        {[1, 2].map(() => (
          <CarCard key={'Car'} brand={'Peugeot'} model={'208'} year={2019} mileage={39_182} />
        ))}
      </div>
      <div className="bg-primary-400 w-3/4"></div>
    </div>
  );
};
