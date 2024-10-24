import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

export const FormLabel = ({ children, className, ...rest }: Props) => (
  <label {...rest} className={clsx('block text-sm font-medium text-secondary-700', className)}>
    {children}
  </label>
);
