import { FaPencil } from 'react-icons/fa6';

import { P, Subtle } from '../shared/typography/Typography';

type Props = {
  label: string;
  value: string | number;
};
export const ChangeField = ({ label, value }: Props) => (
  <div className="rounded-lg border border-primary-200 bg-primary-50 p-3">
    <Subtle className="mb-1 flex items-center gap-1 text-primary-700">
      <FaPencil size={12} />
      {label}
    </Subtle>
    <P className="font-medium text-primary-900">{value}</P>
  </div>
);
