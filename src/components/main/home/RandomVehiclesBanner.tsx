import clsx from 'clsx';

import { CarIcon } from './icons/CarIcon';
import { MotorcycleIcon } from './icons/MotorcycleIcon';
import { TruckIcon } from './icons/TruckIcon';

type Props = {
  orientation: 'left' | 'right';
};
export const RandomVehiclesBanner = ({ orientation }: Props) => {
  const vehiclesIcons: React.ComponentType<{ className: string }>[] = [
    CarIcon,
    MotorcycleIcon,
    TruckIcon,
  ];
  const vehiclesColors: string[] = ['secondary-900', 'primary-600'];

  const translationClass: string =
    orientation === 'left'
      ? '-translate-x-1/2'
      : '-translate-x-[500%] sm:-translate-x-[460%] md:-translate-x-[360%] lg:-translate-x-[300%] xl:-translate-x-[200%]';
  const animationClass: string =
    orientation === 'left'
      ? 'animate-infinite-scroll-right-to-left'
      : 'animate-infinite-scroll-left-to-right';
  const flipClass: string = orientation === 'left' ? 'scale-x-[-1]' : '';

  const getRandomIcon = (icons: React.ComponentType<{ className: string }>[], colors: string[]) => {
    const IconComponent = icons[Math.floor(Math.random() * icons.length)]!;

    const randomIndex: number = Math.floor(Math.random() * colors.length);
    const baseColor = colors[randomIndex];
    const hoverColor = colors[colors.length - randomIndex - 1];
    const fillColor = baseColor === 'secondary-900' ? 'fill-secondary-900' : 'fill-primary-600';
    const hoverFillColor =
      hoverColor === 'secondary-900' ? 'hover:fill-secondary-900' : 'hover:fill-primary-600';
    return (
      <IconComponent className={clsx(fillColor, hoverFillColor, 'h-auto w-56 transition-colors')} />
    );
  };

  const vehicleIcon = Array.from({ length: 4 }).map((_, i) => (
    <li key={i} className={clsx('w-56', flipClass)}>
      {getRandomIcon(vehiclesIcons, vehiclesColors)}
    </li>
  ));

  return (
    <>
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
    </>
  );
};
