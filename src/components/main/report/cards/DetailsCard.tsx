import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import { BiBrush } from 'react-icons/bi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { FaInfoCircle } from 'react-icons/fa';
import { GiEcology } from 'react-icons/gi';
import { GiCargoCrane } from 'react-icons/gi';
import { HiSpeakerWave } from 'react-icons/hi2';
import { ImPower } from 'react-icons/im';
import { IoLogoModelS } from 'react-icons/io';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { NoticeCard } from '../NoticeCard';

type KilometerData = {
  date: string;
  kilometers: number;
};

interface Props {
  data: KilometerData[];
}

const KilometerChart = ({ data }: Props) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="kilometers" stroke="#FFA500" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const getChartData = (vehicle: Vehicle): KilometerData[] =>
  vehicle.technicalControls
    .map((control) => ({
      date: control.date,
      kilometers: Number(control.km),
    }))
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

const hasMileageError = (data: KilometerData[]): boolean => {
  if (!data || data.length < 2) {
    return false;
  }

  for (let i = 1; i < data.length; i++) {
    const current = data[i];
    const previous = data[i - 1];

    if (
      current?.kilometers !== undefined &&
      previous?.kilometers !== undefined &&
      current.kilometers < previous.kilometers
    ) {
      return true;
    }
  }

  return false; // Pas d'anomalie
};
export const DetailsCard = ({ vehicle }: { vehicle: any }) => {
  const chartData = getChartData(vehicle);

  const warning = hasMileageError(chartData);

  return {
    title: 'Details',
    icon: <FaInfoCircle className="text-4xl text-gray-700" />,
    key: 'details',
    content: (
      <div>
        <div className="mt-6 w-full rounded-lg border bg-white p-4 shadow-md">
          <p className="text-lg ">Spécifications</p>
          <p className="mb-4 text-sm text-gray-600">Caractéristiques et équipements du véhicule</p>

          {/* Note */}
          <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
            <div className="mr-3 shrink-0 text-xl text-blue-500">
              <FaInfoCircle />
            </div>
            <div>
              <p className="text-sm text-gray-800">
                Vérifiez que les spécifications et l&apos;équipement de ce véhicule correspondent
                aux déclarations
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex items-center space-x-4">
                <GiCargoCrane className="text-2xl text-blue-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Marque</h4>
                  <p className="text-base text-gray-800">{vehicle.features.brand}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <IoLogoModelS className="text-2xl text-blue-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Modèle</h4>
                  <p className="text-base text-gray-800">{vehicle.features.model}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <BiBrush className="text-2xl text-green-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Couleur</h4>
                  <p className="text-base text-gray-800">{vehicle.features.color}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <BsFuelPumpFill className="text-2xl text-red-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Energie</h4>
                  <p className="text-base text-gray-800">{vehicle.features.energy}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MdOutlineAirlineSeatReclineExtra className="text-2xl text-purple-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Nombre de places</h4>
                  <p className="text-base text-gray-800">{vehicle.features.seatingNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <IoLogoModelS className="text-2xl text-yellow-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Type</h4>
                  <p className="text-base text-gray-800">{vehicle.features.ceBody}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <GiEcology className="text-2xl text-green-400" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Norme environnementale</h4>
                  <p className="text-base text-gray-800">{vehicle.features.pollutionCode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <ImPower className="text-2xl text-indigo-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Cylindrée</h4>
                  <p className="text-base text-gray-800">{vehicle.features.displacement} cc</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <HiSpeakerWave className="text-2xl text-pink-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Puissance sonore</h4>
                  <p className="text-base text-gray-800">
                    {vehicle.features.sonorousPowerLevel} dba
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full rounded-lg border bg-white p-4 shadow-md">
          <h2 className="text-lg ">Compteur Kilométrique</h2>
          <p className="mb-4 text-sm text-gray-600">Kilométrage</p>

          {/* Note */}
          <div className="mb-4 flex items-start rounded-lg bg-gray-100 p-3">
            <div className="mr-3 shrink-0 text-xl text-blue-500">
              <FaInfoCircle />
            </div>
            <div>
              <p className="text-sm text-gray-800">
                Vérifiez que le kilométrage de ce véhicule correspondent aux déclarations
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-md">
            <div className=" gap-6">
              <KilometerChart data={chartData} />
            </div>
          </div>
        </div>
      </div>
    ),
    cardComponent: <NoticeCard title="Détails" icon={FaInfoCircle} warning={warning} />,
  };
};
