// import OpenAPIClientAxios from 'openapi-client-axios';

// import type { Client } from '../../types/user';
// import { assignTokenInterceptor } from './interceptors';

// const userApi = new OpenAPIClientAxios({
//   definition: `${import.meta.env.VITE_BASE_USER_SERVICE_URL}/openapi.json`,
//   axiosConfigDefaults: {
//     baseURL: import.meta.env.VITE_BASE_USER_SERVICE_URL,
//   },
// });

// export const getUserApiClient = async () => {
//   const client = await userApi.getClient<Client>();

//   client.interceptors.request.use(assignTokenInterceptor);

//   return client;
// };
import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { userContract } from '@zcorp/wheelz-contracts';

import { useAuthStore } from '../../stores/useAuthStore';
export const userTsr = initTsrReactQuery(userContract, {
  baseUrl: import.meta.env.VITE_BASE_USER_SERVICE_URL,
  baseHeaders: {
    Authorization: 'Bearer ' + useAuthStore.getState().token,
  },
});
