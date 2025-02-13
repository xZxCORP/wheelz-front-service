import {
  PiCarProfileThin,
  PiFileArrowUpThin,
  PiFilePlusThin,
  PiUserCircleGearThin,
} from 'react-icons/pi';

import { ToggleButton } from '../shared/button/ToggleButton';

export const ProRoutingButtons = () => {
  return (
    <>
      <ToggleButton id={'my-garage'} Icon={PiCarProfileThin} />
      <ToggleButton id={'add-vehicle'} Icon={PiFilePlusThin} />
      <ToggleButton id={'update-vehicle'} Icon={PiFileArrowUpThin} />
      <ToggleButton id={'profile'} Icon={PiUserCircleGearThin} />
    </>
  );
};
