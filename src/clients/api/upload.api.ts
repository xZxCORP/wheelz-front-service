import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { uploadContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const uploadTsr = initTsrReactQuery(uploadContract, {
  baseUrl: import.meta.env.VITE_BASE_USER_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
