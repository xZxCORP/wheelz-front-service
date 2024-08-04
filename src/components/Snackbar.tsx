import { ReactNode, useEffect, useRef, useState } from 'react';

export const Snackbar = ({
  onClose,
  type,
  message,
  closeLabel,
  duration = 3000,
}: {
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: ReactNode;
  duration?: number;
  icon?: ReactNode | boolean;
  onClose: () => void;
  closeLabel: string;
}) => {
  //auto dismiss
  const dismissReference = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (duration) {
      dismissReference.current = setTimeout(() => {
        onClose();
      }, duration);
    }

    return () => {
      clearTimeout(dismissReference.current);
    };
  }, []);

  // progressBar
  const progressBarReference = useRef<ReturnType<typeof setInterval>>();
  const [progress, setProgress] = useState(0);
  const durationReference = useRef(duration / 100);

  useEffect(() => {
    if (duration) {
      progressBarReference.current = setInterval(() => {
        setProgress((previous) => (previous < 100 ? previous + 1 : 100));
      }, durationReference.current);
    }

    return () => {
      clearInterval(progressBarReference.current);
    };
  }, []);

  return (
    <div
      className={`h-14 w-3/4 ${
        type === 'error'
          ? 'bg-error-700'
          : type === 'info'
            ? 'bg-secondary-700'
            : type === 'warning'
              ? 'bg-warning-700'
              : type === 'success'
                ? 'bg-success-700'
                : undefined
      } relative z-50 flex items-center justify-between rounded-lg px-4 text-white`}
    >
      <p>{message}</p>
      <button className="rounded-lg border border-white px-3 py-1" onClick={onClose} type="button">
        {closeLabel}
      </button>
      {!!duration && (
        <div className="bg-primary-50 absolute bottom-0 left-0 h-1 w-full rounded-lg">
          <span
            className="bg-primary-300 absolute inset-y-0 left-0 h-full rounded-lg transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Snackbar;
