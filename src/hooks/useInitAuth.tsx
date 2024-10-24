import { useEffect } from 'react';

import { authTsr } from '../clients/api/auth.api';
import { userTsr } from '../clients/api/user.api';
import { useAuthStore } from '../stores/useAuthStore';
import { useGlobalLoadingStore } from '../stores/useGlobalLoadingStore';

export const useInitAuth = () => {
  const { token, setUser, clearAuth } = useAuthStore();
  const { setLoading } = useGlobalLoadingStore();

  useEffect(() => {
    if (token) {
      const fetch = async () => {
        setLoading(true);
        const verifyResponse = await authTsr.authentication.verify.mutate({
          body: {
            token,
          },
        });
        if (verifyResponse.status === 200) {
          const userResponse = await userTsr.users.getUserById.query({
            params: {
              id: verifyResponse.body.toString(),
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
      fetch().then(() => console.log('init user'));
    } else {
      clearAuth();
    }
  }, [clearAuth, setLoading, setUser, token]);
};
