import useApp from '../stores/useApp';

export const SessionService = {
  initSession: async (refreshToken: string | null) => {
    const { setAppState, setRefreshToken } = useApp.getState();
    try {
      if (!refreshToken) throw 'No token found';
      setRefreshToken(refreshToken);

      setAppState('logged');
    } catch (error) {
      setAppState('unlogged');
      if (typeof error === 'string') throw { data: { message: error } };

      throw error;
    }
  },
};
