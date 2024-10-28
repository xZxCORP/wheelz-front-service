import type { Sinister } from '@zcorp/shared-typing-wheelz';
import { useState } from 'react';
import {
  FaCalendar,
  FaCar,
  FaChevronDown,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaMedkit,
} from 'react-icons/fa';

import { formatDateWithoutTime } from '../../../utils/date';
import { Badge } from '../../shared/badge/Badge';
import { P, Subtle } from '../../shared/typography/Typography';

interface Props {
  sinister: Sinister;
  onClick?: () => void;
}

export const SinisterItem = ({ sinister, onClick }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (onClick) onClick();
  };

  const getTimeElapsed = (date: Date) => {
    const now = new Date();
    const elapsed = now.getTime() - new Date(date).getTime();
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    if (days === 0) return "Aujourd'hui";
    if (days === 1) return 'Hier';
    return `Il y a ${days} jours`;
  };

  return (
    <div
      className={`group relative transition-all duration-200 ease-in-out ${isExpanded ? 'translate-x-2' : 'hover:translate-x-1'} cursor-pointer rounded-lg border-l-4 border-error-500 bg-error-50/50 p-4 shadow-sm hover:shadow-md`}
      onClick={toggleExpand}
    >
      <div
        className={`absolute right-4 top-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
      >
        <FaChevronDown className="text-error-500" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="mt-3 flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-error-100 p-2">
              <FaCalendar className="text-error-600" size={16} />
            </div>
            <div className="flex flex-col">
              <P weight="medium" className="text-error-800">
                {formatDateWithoutTime(new Date(sinister.date))}
              </P>
              <Subtle className="text-error-600">{getTimeElapsed(sinister.date)}</Subtle>
            </div>
          </div>
          {sinister.isWeekend && <Badge badgeStyle={{ color: 'error' }}>Weekend</Badge>}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="rounded-full bg-error-100 p-2">
          <FaCar className="text-error-600" size={18} />
        </div>
        <div className="flex flex-col">
          <Subtle className="text-error-600">{sinister.collisionType}</Subtle>
        </div>
      </div>

      <div
        className={`mt-4 grid gap-4 overflow-hidden transition-all duration-200 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0">
          <div className="grid gap-4 rounded-lg bg-white/50 p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-error-100 p-2">
                  <FaMedkit className="text-error-600" size={16} />
                </div>
                <div className="flex flex-col">
                  <Subtle className="text-secondary-600">Type de blessure</Subtle>
                  <P className="text-error-800">{sinister.injuryType}</P>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-error-100 p-2">
                  <FaInfoCircle className="text-error-600" size={16} />
                </div>
                <div className="flex flex-col">
                  <Subtle className="text-secondary-600">Facteur principal</Subtle>
                  <P className="text-error-800">{sinister.primaryFactor}</P>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="rounded-full bg-error-100 p-2">
                <FaMapMarkedAlt className="text-error-600" size={16} />
              </div>
              <div className="flex flex-col">
                <Subtle className="text-secondary-600">Localisation</Subtle>
                <P className="text-error-800">{sinister.location.description}</P>
                <Subtle className="text-error-600">
                  {sinister.location.coordinates.latitude.toFixed(6)},{' '}
                  {sinister.location.coordinates.longitude.toFixed(6)}
                </Subtle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
