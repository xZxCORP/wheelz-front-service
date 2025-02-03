import React from 'react';

interface AdminPanelProps {
  name: string;
  className?: string;
  children: React.ReactNode;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ name, className = '', children }) => {
  const combinedClasses = `flex-col border bg-white ${className}`;

  return (
    <div className={combinedClasses}>
      <div className="bg-secondary-400 p-2 w-full">
        <h3 className="text-black text-xs font-semibold">{name}</h3>
      </div>
      <div className="px-2.5 py-4">
        {children}
      </div>
    </div>
  );
};
