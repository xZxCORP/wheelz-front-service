import { useNavigate } from 'react-router-dom';

import { LoginForm } from '../../components/main/auth/login/forms/LoginForm';
import { RandomVehiclesBanner } from '../../components/main/home/RandomVehiclesBanner';
import { ExplanationSection } from '../../components/shared/Explanation';
import { FeaturesSection } from '../../components/shared/FeaturesSections';
import { LandingMessage } from '../../components/shared/LandingMessage';

export const MainRoot = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen w-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="flex w-full flex-1 flex-col justify-around overflow-hidden">
          <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
          <RandomVehiclesBanner orientation="left"></RandomVehiclesBanner>
          <RandomVehiclesBanner className="blur-sm" orientation="right"></RandomVehiclesBanner>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
          <LandingMessage />
          <h2 className="text-4xl font-bold text-primary-900">Connexion</h2>
          <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
            <LoginForm onLogged={() => navigate('/dashboard')} />
          </div>
        </div>
      </div>
      <FeaturesSection />
      <ExplanationSection />
    </>
  );
};
