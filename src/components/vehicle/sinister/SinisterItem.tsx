import type { Sinister } from '@zcorp/shared-typing-wheelz';
import { FaCalendar, FaMapPin } from 'react-icons/fa6';

import { formatDate } from '../../../utils/date';
import { P, Subtle } from '../../shared/typography/Typography';

interface Props {
  sinister: Sinister;
}

export const SinisterItem = ({ sinister }: Props) => (
  <div className="flex flex-col gap-2 rounded-r-lg border-l-4 border-error-400 bg-error-50/50 p-3">
    <div className="flex items-center gap-2">
      <FaCalendar size={16} className="text-error-600" />
      <Subtle className="text-error-700">{formatDate(new Date(sinister.date))}</Subtle>
    </div>
    <div className="flex flex-col gap-1">
      <P weight="medium" className="text-error-800">
        {sinister.type}
      </P>
      <div className="flex items-start gap-2">
        <FaMapPin size={16} className="mt-1 text-error-500" />
        <P className="text-error-700">{sinister.location.description}</P>
      </div>
    </div>
  </div>
);
