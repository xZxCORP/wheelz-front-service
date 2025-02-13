import { useEffect, useState } from 'react';
import { PiCarProfileThin, PiUserCircleGearThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import type { ProDashboardPages } from '../../pages/dashboard/pro/ProDashboard';
import { ToggleButton } from '../shared/button/ToggleButton';

export const ProRoutingButtons = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<ProDashboardPages>('my-garage');

  const handleNavigation = (buttonTarget: ProDashboardPages) => {
    if (activeButton === buttonTarget) return;

    navigate(buttonTarget);
    setActiveButton(buttonTarget);
  };
  useEffect(() => {
    navigate(activeButton);
  }, [activeButton, navigate]);
  return (
    <>
      <ToggleButton
        onClick={handleNavigation}
        id={'my-garage'}
        active={activeButton === 'my-garage'}
        Icon={PiCarProfileThin}
      />
      {/* <ToggleButton
        onClick={handleNavigation}
        id={'garages'}
        active={activeButton === 'garages'}
        Icon={PiGarageThin}
      /> */}
      <ToggleButton
        onClick={handleNavigation}
        id={'profile'}
        active={activeButton === 'profile'}
        Icon={PiUserCircleGearThin}
      />
    </>
  );
};
