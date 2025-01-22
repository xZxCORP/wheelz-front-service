import { RandomVehiclesBanner } from '../../components/main/home/RandomVehiclesBanner';
import { VinForm } from '../../components/vehicle/forms/VinForm';

export const MainRoot = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-around overflow-hidden bg-primary-600">
        <RandomVehiclesBanner orientation="right"></RandomVehiclesBanner>
        <RandomVehiclesBanner orientation="left"></RandomVehiclesBanner>
        <RandomVehiclesBanner orientation="right"></RandomVehiclesBanner>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <span className="text-5xl">Bienvenue sur WheelZ !!</span>
        <p className="text-2xl">Renseignez un VIN pour obtenir un rapport.</p>
        <VinForm />
      </div>
    </div>
  );
};
