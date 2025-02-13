import { PiCarThin } from 'react-icons/pi';

type GarageType = 'auto' | 'moto' | 'controle technique';

type Props = {
  name: string;
  tags: GarageType[];
  garageLocalization?: {
    lat: number;
    lon: number;
  }; // Opt for now because it's not implemented
};

export const GarageCard = ({ name, tags }: Props) => {
  return (
    <button className="m-5 h-1/3 w-full rounded bg-white py-2 backdrop-blur transition-all hover:scale-105">
      <div className="ml-2 flex gap-2">
        {tags.map((tag) => (
          <div key={tag} className="bg-primary-400 px- cursor-pointer rounded">
            {tag === 'auto' ? <PiCarThin size={25} /> : <PiCarThin size={25} />}
          </div>
        ))}
      </div>
      <div className="m-3 flex size-full flex-col">
        <h2 className="font-semibold">{name}</h2>
        <p>Situé à 2.3km</p>
      </div>
    </button>
  );
};
