import { useState } from 'react';
import { PiCarProfileThin, PiGarageThin, PiUserCircleGearThin } from 'react-icons/pi';

import { Button } from '../../components/shared/button/Button';

export const ClientDashboard = () => {
  const [currentPage, setCurrentPage] = useState<'myGarage' | 'profile' | 'garages'>('myGarage');

  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-row space-x-6">
        <Button className="bg-primary-200 hover:bg-primary-500 active:bg-primary-500 size-14 text-black transition-transform hover:scale-105">
          <PiCarProfileThin size={25} />
        </Button>
        <Button className="bg-primary-200 hover:bg-primary-500 active:bg-primary-500 size-14 text-black transition-transform hover:scale-105">
          <PiGarageThin size={25} />
        </Button>
        <Button className="bg-primary-200 hover:bg-primary-500 active:bg-primary-500 size-14 text-black transition-transform hover:scale-105">
          <PiUserCircleGearThin size={25} />
        </Button>
      </div>
    </div>
  );
};
