import { useEffect } from 'react';

import { authTsr } from '../clients/api/auth.api';
import { userTsr } from '../clients/api/user.api';
import { useAuthStore } from '../stores/useAuthStore';
import { useGlobalLoadingStore } from '../stores/useGlobalLoadingStore';

export const useInitAuth = () => {
  const { token, setUser, setRoles, clearAuth, setIsInitialized } = useAuthStore();
  const { setLoading } = useGlobalLoadingStore();

  useEffect(() => {
    if (token) {
      const fetch = async () => {
        setIsInitialized(false);
        setLoading(true);
        const verifyResponse = await authTsr.authentication.verify.mutate({
          body: {
            token,
          },
        });
        if (verifyResponse.status === 200) {
          setRoles(verifyResponse.body.roles);
          const userResponse = await userTsr.users.getUserById.query({
            params: {
              id: verifyResponse.body.userId.toString(),
            },
          });
          if (userResponse.status === 200) {
            setUser(userResponse.body.data);
          }
        } else {
          setUser(null);
        }

        setLoading(false);
      };
      fetch().then(() => setIsInitialized(true));
    } else {
      clearAuth();
      setIsInitialized(true);
    }
  }, [clearAuth, setIsInitialized, setLoading, setRoles, setUser, token]);
};
