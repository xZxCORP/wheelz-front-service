import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { chainContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const chainTsr = initTsrReactQuery(chainContract, {
  baseUrl: import.meta.env.VITE_BASE_CHAIN_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
