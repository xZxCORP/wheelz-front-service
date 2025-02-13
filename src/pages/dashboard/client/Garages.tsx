import { useEffect, useState } from 'react';

import { useSnackbarStore } from '../../../stores/useSnackbar';
import { GarageCard } from './GarageCard';

export const Garages = () => {
  const [location, setCurrentLocation] = useState<GeolocationCoordinates>();
  const { addSnackbar } = useSnackbarStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation(position.coords);
      });
    } else addSnackbar('Accès impossible à la position actuelle', 'warning');
  }, [addSnackbar]);

  return (
    <div className="bg-primary-50 m-10 flex h-4/5 w-full flex-row justify-around gap-5 rounded-xl">
      <GarageCard name={'Chez mumu'} tags={['auto', 'moto']} />
      <GarageCard name={'Chez mimi'} tags={['moto']} />
      <GarageCard name={'Chez momo'} tags={['auto', 'controle technique']} />
      <GarageCard name={'Chez mama'} tags={['auto', 'moto']} />
    </div>
  );
};
