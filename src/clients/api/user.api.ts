import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { userContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const userTsr = initTsrReactQuery(userContract, {
  baseUrl: import.meta.env.VITE_BASE_USER_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
