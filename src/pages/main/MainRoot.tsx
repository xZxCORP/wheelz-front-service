import { RandomVehiclesBanner } from '../../components/main/home/RandomVehiclesBanner';

export const MainRoot = () => {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="flex w-full flex-1 flex-col justify-around overflow-hidden">
        <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
        <RandomVehiclesBanner orientation="left"></RandomVehiclesBanner>
        <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <span className="text-5xl">Bienvenue</span>
      </div>
    </div>
  );
};
