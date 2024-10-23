import { useEffect, useState } from 'react';

import type { ISnackBar, SnackbarType } from '../../../stores/useSnackbar';
import { P } from '../Typography';

interface Props {
  snackbar: ISnackBar;
  onClose: (id: string) => void;
}
const getSnackbarStyles = (type: SnackbarType) => {
  switch (type) {
    case 'success': {
      return 'bg-success-100 border-success text-success-900';
    }
    case 'error': {
      return 'bg-error-100 border-error text-error-900';
    }
    case 'warning': {
      return 'bg-warning-100 border-warning text-warning-900';
    }
    default: {
      return 'bg-primary-100 border-primary text-primary-900';
    }
  }
};
const getProgressBarColor = (type: SnackbarType) => {
  switch (type) {
    case 'success': {
      return 'bg-success';
    }
    case 'error': {
      return 'bg-error';
    }
    case 'warning': {
      return 'bg-warning';
    }
    default: {
      return 'bg-primary';
    }
  }
};
export const SnackbarItem = ({ snackbar, onClose }: Props) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 0) {
          clearInterval(timer);
          return 0;
        }
        const newProgress = oldProgress - 100 / (snackbar.duration / 100);
        return Math.max(newProgress, 0);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [snackbar.duration]);

  useEffect(() => {
    if (progress === 0) {
      onClose(snackbar.id);
    }
  }, [progress, snackbar.id, onClose]);

  return (
    <div
      className={`${getSnackbarStyles(snackbar.type)} overflow-hidden rounded-lg shadow-lg`}
      style={{ width: '300px' }}
    >
      <div className="flex items-center justify-between p-4">
        <P>{snackbar.message}</P>
        <button onClick={() => onClose(snackbar.id)} className="ml-4 focus:outline-none">
          ×
        </button>
      </div>
      <div className="h-1 w-full bg-secondary-200">
        <div
          className={`h-full ${getProgressBarColor(snackbar.type)} transition-all duration-100 ease-linear`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
