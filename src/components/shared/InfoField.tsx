import type React from 'react';

import { P, Subtle } from './typography/Typography';

interface Props {
  label: string;
  value: string | React.ReactNode;
}

export const InfoField = ({ label, value }: Props) => (
  <div className="space-y-1">
    <Subtle className="font-bold text-secondary-600">{label}:</Subtle>
    <P weight="medium" className="text-secondary-900">
      {value}
    </P>
  </div>
);
