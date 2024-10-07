import { InternalAxiosRequestConfig } from 'axios';

import { useAuthStore } from '../../stores/useAuthStore';

export const assignTokenInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const token = useAuthStore.getState().token;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
