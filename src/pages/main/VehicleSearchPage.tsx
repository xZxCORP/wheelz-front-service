import { VehicleSearchForm } from '../../components/vehicle/VehicleSearchForm';

export const VehicleSearchPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>Recherche complète d'un véhicule :</h2>
      <VehicleSearchForm />
    </div>
  );
};
