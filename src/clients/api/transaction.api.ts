import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { transactionContract } from '@zcorp/wheelz-contracts';

import { useAuthStore } from '../../stores/useAuthStore';
export const transactionTsr = initTsrReactQuery(transactionContract, {
  baseUrl: import.meta.env.VITE_BASE_TRANSACTION_SERVICE_URL,
  baseHeaders: {
    Authorization: 'Bearer ' + useAuthStore.getState().token,
  },
});
