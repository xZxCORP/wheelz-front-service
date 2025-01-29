import { useState } from 'react';

export const Switch: React.FC = () => {
  const [isGarage, setIsGarage] = useState(true);

  const toggleSwitch = () => {
    setIsGarage((prev) => !prev);
  };

  return (
    <div className={`flex`}>
      <button
        className={` border-primary-600 flex h-8 w-24 items-center justify-center rounded-l-lg border px-2 transition-all ${isGarage ? 'bg-primary-200' : 'bg-secondary-500 scale-105'}`}
        onClick={toggleSwitch}
      >
        <span className={isGarage ? 'text-gray-400' : 'font-semibold text-white'}>Particulier</span>
      </button>
      <button
        className={`border-primary-600 flex h-8 w-24 items-center justify-center rounded-r-lg border-y border-r px-2 ${isGarage ? 'bg-secondary-500 scale-105' : 'bg-primary-200'}`}
        onClick={toggleSwitch}
      >
        <span className={isGarage ? 'font-semibold text-white' : 'text-gray-400 '}>Garage</span>
      </button>
    </div>
  );
};
