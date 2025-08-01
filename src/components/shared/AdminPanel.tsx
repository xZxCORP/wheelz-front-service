import clsx from 'clsx';
import type React from 'react';

interface Props {
  name: string;
  className?: string;
  children: React.ReactNode;
}

export const AdminPanel = ({ name, className = '', children }: Props) => {
  return (
    <div className={clsx('flex-col border border-primary-200 bg-background shadow-sm', className)}>
      <div className="w-full bg-secondary-500 p-2">
        <h2 className="text-lg font-semibold text-background">{name}</h2>
      </div>
      <div className="px-2.5 py-4">{children}</div>
    </div>
  );
};
