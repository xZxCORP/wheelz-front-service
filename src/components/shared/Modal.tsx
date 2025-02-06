import type { ReactNode } from 'react';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useClickOutside } from '../../hooks/useClickOutside';
import { Button } from './button/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  extraButtons?: ReactNode[];
  title: string;
  children: ReactNode;
  overlayClassName?: string;
  modalClassName?: string;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  showBottomCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  extraButtons,
  title,
  children,
  overlayClassName = '',
  modalClassName = '',
  closeOnEscape = true,
  closeOnOverlayClick = true,
  showBottomCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
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
  }, [isOpen, onClose, closeOnEscape]);
  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur ${overlayClassName}`}
    >
      <div ref={modalRef} className={`relative m-auto w-full max-w-3xl p-6 ${modalClassName}`}>
        <div className="bg-primary-50 flex w-full translate-y-0 flex-col rounded-lg opacity-100 shadow-lg transition-all duration-300 ease-out">
          <div className="flex items-center justify-between p-4">
            <h2 id="modal-title" className="text-primary-700 text-xl font-semibold">
              {title}
            </h2>
          </div>
          <div className="max-h-[calc(100vh-16rem)] grow overflow-y-auto p-6">{children}</div>
          <div className="flex justify-end gap-2  p-4">
            {extraButtons}
            {showBottomCloseButton && <Button onClick={onClose}>Fermer</Button>}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
