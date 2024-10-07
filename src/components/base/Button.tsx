import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'error' | 'success' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: Props) => {
  const baseClasses =
    'font-semibold rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-200 hover:bg-secondary-300',
    error: 'bg-error-600 text-white hover:bg-error-700',
    success: 'bg-success-600 text-white hover:bg-success-700',
    warning: 'bg-warning-600 text-white hover:bg-warning-700',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
