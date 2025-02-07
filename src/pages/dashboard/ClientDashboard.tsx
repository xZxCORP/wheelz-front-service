import { useState } from 'react';
import { PiCarProfileThin, PiGarageThin, PiUserCircleGearThin } from 'react-icons/pi';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from '../../components/shared/button/Button';

type ClientDashboardPages = 'my-garage' | 'garages' | 'profile';

export const ClientDashboard = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<ClientDashboardPages>('my-garage');

  const handleNavigation = (buttonTarget: ClientDashboardPages) => {
    if (activeButton === buttonTarget) return;

    navigate(buttonTarget);
    setActiveButton(buttonTarget);
  };

  return (
    <div className="flex size-full flex-wrap justify-center">
      <div className="flex flex-row space-x-6 py-2 ">
        <Button
          onClick={() => handleNavigation('my-garage')}
          className={`${activeButton === 'my-garage' ? 'pointer-events-none bg-primary-500' : 'bg-primary-300'}  size-14 text-black transition-transform hover:scale-105 hover:bg-primary-500 active:bg-primary-500`}
        >
          <PiCarProfileThin size={25} />
        </Button>
        <Button
          onClick={() => handleNavigation('garages')}
          className={`${activeButton === 'garages' ? 'pointer-events-none bg-primary-500' : 'bg-primary-300'}  size-14 text-black transition-transform hover:scale-105 hover:bg-primary-500 active:bg-primary-500`}
        >
          <PiGarageThin size={25} />
        </Button>
        <Button
          onClick={() => handleNavigation('profile')}
          className={`${activeButton === 'profile' ? 'pointer-events-none bg-primary-500' : 'bg-primary-300'}  size-14 text-black transition-transform hover:scale-105 hover:bg-primary-500 active:bg-primary-500`}
        >
          <PiUserCircleGearThin size={25} />
        </Button>
      </div>
      <Outlet />
    </div>
  );
};
