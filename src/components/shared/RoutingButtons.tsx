import { useEffect, useState } from 'react';
import { PiCarProfileThin, PiGarageThin, PiUserCircleGearThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import type { ClientDashboardPages } from '../../pages/dashboard/ClientDashboard';
import { ToggleButton } from './button/ToggleButton';

export const RoutingButtons = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<ClientDashboardPages>('my-garage');

  const handleNavigation = (buttonTarget: ClientDashboardPages) => {
    if (activeButton === buttonTarget) return;

    navigate(buttonTarget);
    setActiveButton(buttonTarget);
  };
  useEffect(() => {
    navigate(activeButton);
  }, [activeButton, navigate]);
  return (
    <>
      <ToggleButton id={'my-garage'} Icon={PiCarProfileThin} />
      <ToggleButton id={'garages'} Icon={PiGarageThin} />
      <ToggleButton id={'profile'} Icon={PiUserCircleGearThin} />
    </>
  );
};
