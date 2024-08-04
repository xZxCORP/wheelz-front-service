import { Navigate } from 'react-router-dom';

import useApp from '../stores/useApp';

export const PrivateRoute = ({ elem: Element_ }: { elem: () => JSX.Element }) => {
  const { appState } = useApp();

  return appState === 'logged' ? <Element_ /> : <Navigate to="/" />;
};

export const OnlyPublicRoute = ({ elem: Element_ }: { elem: () => JSX.Element }) => {
  const { appState } = useApp();

  return appState === 'unlogged' ? <Element_ /> : <Navigate to="/" />;
};
