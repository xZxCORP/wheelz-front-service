import clsx from 'clsx';

type Props = {
  orientation: 'left' | 'right';
};
export const RandomVehiclesBanner = ({ orientation }: Props) => {
  const vehiclesNames: string[] = ['car', 'motorcycle', 'truck'];

  const translationClass: string =
    orientation === 'left'
      ? '-translate-x-1/2'
      : '-translate-x-[500%] sm:-translate-x-[460%] md:-translate-x-[360%] lg:-translate-x-[300%] xl:-translate-x-[200%]';
  const animationClass: string =
    orientation === 'left'
      ? 'animate-infinite-scroll-right-to-left'
      : 'animate-infinite-scroll-left-to-right';
  const flipClass: string = orientation === 'left' ? 'scale-x-[-1]' : '';

  const generateFileName = (path: string, max: number) => {
    return `${path}/${vehiclesNames[Math.floor(Math.random() * max)]}-icon.svg`;
  };

  const pouet = Array.from({ length: 4 }).map((_, i) => (
    <li key={i}>
      <img
        src={generateFileName('/home_page', vehiclesNames.length)}
        alt="Icône de véhicule"
        className={clsx('w-56 ', flipClass)}
      />
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
        {pouet}
      </ul>
      <ul
        className={clsx(
          'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8',
          animationClass
        )}
      >
        {pouet}
      </ul>
    </div>
  );
};
