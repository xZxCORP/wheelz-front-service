import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { authenticationContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const authTsr = initTsrReactQuery(authenticationContract, {
  baseUrl: import.meta.env.VITE_BASE_AUTH_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
