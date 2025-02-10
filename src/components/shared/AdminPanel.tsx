import clsx from 'clsx';
import type React from 'react';

interface Props {
  name: string;
  className?: string;
  children: React.ReactNode;
}

export const AdminPanel = ({ name, className = '', children }: Props) => {
  return (
    <div className={clsx('flex-col border bg-white', className)}>
      <div className="w-full bg-secondary-400 p-2">
        <h3 className="text-xs font-semibold text-black">{name}</h3>
      </div>
      <div className="px-2.5 py-4">{children}</div>
    </div>
  );
};
