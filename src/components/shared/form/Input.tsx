import clsx from 'clsx';
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          // Base
          'w-full rounded-md text-sm',
          'h-10 px-3 py-2',

          // Colors
          'bg-primary-200',
          'border-primary-300 border',
          'placeholder:text-primary-500',

          // Focus
          'focus:outline-none',
          'focus:border-primary-500',
          'focus:ring-2',
          'focus:ring-primary-500/20',

          // File input
          'file:border-0',
          'file:bg-transparent',
          'file:text-sm',
          'file:font-medium',
          'file:text-secondary-700',
          'file:mr-4',

          // Disabled
          'disabled:cursor-not-allowed',
          'disabled:opacity-50',
          'disabled:bg-primary-50',

          // Invalid/Error state - à utiliser avec aria-invalid
          'aria-[invalid=true]:border-error-500',
          'aria-[invalid=true]:focus:border-error-500',
          'aria-[invalid=true]:focus:ring-error-500/20',

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
