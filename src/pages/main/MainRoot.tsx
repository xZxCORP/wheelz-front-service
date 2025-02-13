import { useNavigate } from 'react-router-dom';

import { LoginForm } from '../../components/main/auth/login/forms/LoginForm';
import { RandomVehiclesBanner } from '../../components/main/home/RandomVehiclesBanner';

export const MainRoot = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-screen">
      <div className="flex w-full flex-1 flex-col justify-around overflow-hidden">
        <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
        <RandomVehiclesBanner orientation="left"></RandomVehiclesBanner>
        <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <h2 className="text-4xl">Connexion</h2>
        <LoginForm onLogged={() => navigate('/dashboard')} />
      </div>
    </div>
  );
};
