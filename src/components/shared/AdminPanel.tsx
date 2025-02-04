import type React from 'react';

interface AdminPanelProps {
  name: string;
  className?: string;
  children: React.ReactNode;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ name, className = '', children }) => {
  const combinedClasses = `flex-col border bg-white ${className}`;

  return (
    <div className={combinedClasses}>
      <div className="w-full bg-secondary-400 p-2">
        <h3 className="text-xs font-semibold text-black">{name}</h3>
      </div>
      <div className="px-2.5 py-4">{children}</div>
    </div>
  );
};
