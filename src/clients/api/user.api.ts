import OpenAPIClientAxios from 'openapi-client-axios';

import { Client } from '../../types/user';
import { assignTokenInterceptor } from './interceptors';

const userApi = new OpenAPIClientAxios({
  definition: `${import.meta.env.VITE_BASE_USER_SERVICE_URL}/openapi.json`,
  axiosConfigDefaults: {
    baseURL: import.meta.env.VITE_BASE_USER_SERVICE_URL,
  },
});

export const getUserApiClient = async () => {
  const client = await userApi.getClient<Client>();

  client.interceptors.request.use(assignTokenInterceptor);

  return client;
};
