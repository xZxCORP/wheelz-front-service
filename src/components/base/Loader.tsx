import clsx from 'clsx';

type LoaderSize = 'sm' | 'md' | 'lg';
type LoaderVariant = 'primary' | 'secondary' | 'success' | 'danger';

interface Props {
  size?: LoaderSize;
  variant?: LoaderVariant;
  fullScreen?: boolean;
}

const sizeClasses: Record<LoaderSize, string> = {
  sm: 'w-6 h-6 border-2',
  md: 'w-10 h-10 border-3',
  lg: 'w-16 h-16 border-4',
};

const variantClasses: Record<LoaderVariant, string> = {
  primary: 'border-primary-500',
  secondary: 'border-secondary-500',
  success: 'border-success-500',
  danger: 'border-error-500',
};

const Loader = ({ size = 'md', variant = 'primary', fullScreen = false }: Props) => {
  const loaderClasses = clsx(
    'rounded-full',
    'animate-spin',
    'border-t-transparent',
    sizeClasses[size],
    variantClasses[variant]
  );

  const wrapperClasses = fullScreen
    ? 'fixed inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={wrapperClasses}>
      <div className={loaderClasses}></div>
      <div>Chargement</div>
    </div>
  );
};

export default Loader;
