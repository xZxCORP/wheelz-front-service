import { PiCarProfileThin, PiGarageThin, PiUserCircleGearThin } from 'react-icons/pi';

import { ToggleButton } from './button/ToggleButton';

export const RoutingButtons = () => {
  return (
    <>
      <ToggleButton id={'my-garage'} Icon={PiCarProfileThin} />
      <ToggleButton id={'garages'} Icon={PiGarageThin} />
      <ToggleButton id={'profile'} Icon={PiUserCircleGearThin} />
    </>
  );
};
