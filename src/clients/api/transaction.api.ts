import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { transactionContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const transactionTsr = initTsrReactQuery(transactionContract, {
  baseUrl: import.meta.env.VITE_BASE_TRANSACTION_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
