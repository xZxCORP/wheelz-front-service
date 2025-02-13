import { PiFilePlusThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Button } from '../../../components/shared/button/Button';

export const NoVehicleAsPro = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>Vous n&apos;avez pas encore de véhicule dans votre garage.</p>
      <Button asChild>
        <Link to="/dashboard/pro/add-vehicle">
          <PiFilePlusThin />
          Ajouter un véhicule
        </Link>
      </Button>
    </div>
  );
};
