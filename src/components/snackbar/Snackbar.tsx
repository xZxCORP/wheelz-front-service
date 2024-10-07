import { useSnackbarStore } from '../../stores/useSnackbar';
import { SnackbarItem } from './SnackbarItem';

export const Snackbar = () => {
  const { snackbars, removeSnackbar } = useSnackbarStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {snackbars.map((snackbar) => (
        <SnackbarItem key={snackbar.id} snackbar={snackbar} onClose={removeSnackbar} />
      ))}
    </div>
  );
};
