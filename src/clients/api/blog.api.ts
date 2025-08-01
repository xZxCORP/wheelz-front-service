import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { blogContract } from '@zcorp/wheelz-contracts';

import { createApiHandler } from './apiHandler';
export const blogTsr = initTsrReactQuery(blogContract, {
  baseUrl: import.meta.env.VITE_BASE_BLOG_SERVICE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: createApiHandler(),
});
