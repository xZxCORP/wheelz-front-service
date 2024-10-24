import { useInitAuth } from '../../../hooks/useInitAuth';

export const AuthProvider = () => {
  useInitAuth();
  return null;
};
