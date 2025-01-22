import clsx from 'clsx';

import { CarIcon } from './icons/CarIcon';
import { MotorcycleIcon } from './icons/MotorcycleIcon';
import { TruckIcon } from './icons/TruckIcon';

type Props = {
  orientation: 'left' | 'right';
};
export const RandomVehiclesBanner = ({ orientation }: Props) => {
  const vehiclesIcons: any[] = [CarIcon, MotorcycleIcon, TruckIcon];

  const translationClass: string =
    orientation === 'left'
      ? '-translate-x-1/2'
      : '-translate-x-[500%] sm:-translate-x-[460%] md:-translate-x-[360%] lg:-translate-x-[300%] xl:-translate-x-[200%]';
  const animationClass: string =
    orientation === 'left'
      ? 'animate-infinite-scroll-right-to-left'
      : 'animate-infinite-scroll-left-to-right';
  const flipClass: string = orientation === 'left' ? 'scale-x-[-1]' : '';

  const getRandomIcon = (max: number) => {
    const IconComponent = vehiclesIcons[Math.floor(Math.random() * max)];
    return <IconComponent classes="w-56 h-auto fill-black" />;
  };

  const vehicleIcon = Array.from({ length: 4 }).map((_, i) => (
    <li key={i} className={clsx('w-56', flipClass)}>
      {getRandomIcon(vehiclesIcons.length)}
    </li>
  ));

  return (
    <div className={clsx('inline-flex w-full', translationClass)}>
      <ul
        className={clsx(
          'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8',
          animationClass
        )}
      >
        {vehicleIcon}
      </ul>
      <ul
        className={clsx(
          'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8',
          animationClass
        )}
      >
        {vehicleIcon}
      </ul>
    </div>
  );
};
