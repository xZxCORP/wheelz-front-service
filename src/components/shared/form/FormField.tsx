import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export function FormField({ children, className }: Props) {
  return <div className={clsx('space-y-1', className)}>{children}</div>;
}
