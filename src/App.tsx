import { useCallback, useLayoutEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import LoadingAnimation from './components/LoadingAnimation';
import { Snackbar } from './components/Snackbar';
import router from './router/Router';
import { SessionService } from './services/session.service';
import useApp from './stores/useApp';
import useSnackbar from './stores/useSnackbar';
import { IBackendError } from './types/api';

const App = () => {
  const { appState } = useApp();
  const { snacks, removeSnack, addSnack } = useSnackbar();

  const init = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      await SessionService.initSession(refreshToken).catch((error: IBackendError) => {
        addSnack('error', error.data.message as string);
      });
    } catch (error) {
      console.warn(error);
    }
  }, [addSnack]);

  useLayoutEffect(() => {
    init();
  }, [init]);

  return (
    <div className="h-screen w-screen" tabIndex={-1}>
      {appState === 'loading' ? (
        <LoadingAnimation />
      ) : (
        <>
          <RouterProvider router={router} />
          <div className="absolute bottom-0 m-auto flex w-full flex-col items-center justify-center space-y-2 py-1">
            {snacks.map((snack, index) => (
              <Snackbar
                key={index}
                type={snack.type}
                message={snack.message}
                duration={snack.duration}
                closeLabel="Close"
                onClose={() => removeSnack(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default App;
