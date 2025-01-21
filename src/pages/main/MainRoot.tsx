import { VehicleSearchForm } from '../../components/vehicle/forms/VehicleSearchForm';
import { VinForm } from '../../components/vehicle/forms/VinForm';

export const MainRoot = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>MainRoot</h2>
      <VinForm></VinForm>
      <VehicleSearchForm />
    </div>
  );
};
