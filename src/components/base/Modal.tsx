import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import Button from './Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  extraButtons?: ReactNode[];
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, extraButtons, title, children }: Props) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, onClose);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-secondary-950/50">
      <div ref={modalRef} className="relative m-auto w-full max-w-3xl p-6">
        <div
          className={clsx(
            'flex w-full flex-col rounded-lg bg-secondary-50 shadow-lg',
            'transition-all duration-300 ease-out',
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <div className="flex items-center justify-between border-b border-secondary-200 p-4">
            <h2 id="modal-title" className="text-xl font-semibold text-primary-700">
              {title}
            </h2>
            <Button variant="secondary" size="sm" onClick={onClose} aria-label="Fermer">
              X
            </Button>
          </div>
          <div className="max-h-[calc(100vh-16rem)] grow overflow-y-auto p-6">{children}</div>
          <div className="flex justify-end gap-2 border-t border-secondary-200 p-4">
            {extraButtons}
            <Button variant="primary" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
