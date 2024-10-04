import { ReactNode, useRef } from 'react';

import { useClickOutside } from '../hooks/useClickOutside';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  const ref = useRef(null);

  useClickOutside(ref, onClose);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-secondary-950/50">
      <div ref={ref} className="relative m-auto w-full max-w-3xl p-6">
        <div className="flex w-full flex-col rounded-lg bg-secondary-50 shadow-lg">
          <div className="flex items-center justify-between border-b border-secondary-200 p-4">
            <h3 className="text-xl font-semibold text-primary-700">{title}</h3>
            <button
              className="text-secondary-500 transition-colors duration-200 hover:text-secondary-700"
              onClick={onClose}
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="max-h-[calc(100vh-16rem)] grow overflow-y-auto p-6 text-secondary-800">
            {children}
          </div>
          <div className="flex justify-end border-t border-secondary-200 p-4">
            <button
              className="rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-700"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
