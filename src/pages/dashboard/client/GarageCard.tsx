import { GoZap } from 'react-icons/go';
import { PiCarThin, PiMotorcycleThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

type GarageType = 'auto' | 'moto' | 'controle technique';

type Props = {
  id: number;
  name: string;
  tags: GarageType[];
  garageLocalization?: {
    lat: number;
    lon: number;
  }; // Opt for now because it's not implemented
};

export const GarageCard = ({ name, tags, id }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/dashboard/client/garages/${id}`)}
      className="mt-5 h-1/3 w-full rounded bg-white backdrop-blur transition-all hover:scale-105"
    >
      <div className="m-2 flex gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="cursor-pointer rounded-lg bg-secondary-500 px-2 py-1 text-white"
          >
            {tag === 'auto' ? (
              <PiCarThin size={25} />
            ) : tag === 'moto' ? (
              <PiMotorcycleThin size={25} />
            ) : (
              <GoZap size={25} />
            )}
          </div>
        ))}
      </div>
      <hr className="my-3 h-1 w-3/4 justify-self-center border-t" />
      <div className="m-3 flex flex-col justify-around">
        <h2 className="font-semibold">{name}</h2>
        <p>Situé à 2.3km</p>
      </div>
    </button>
  );
};
