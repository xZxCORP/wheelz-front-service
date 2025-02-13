import { Button } from '../../../components/shared/button/Button';

export const NoVehicleAsPro = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>Vous n&apos;avez pas encore de véhicule dans votre garage.</p>
      <Button>Ajouter un véhicule</Button>
    </div>
  );
};
