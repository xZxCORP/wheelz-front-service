import type { BasicResponse } from '@zcorp/wheelz-contracts';
type ApiResponse = {
  body: BasicResponse;
};
export const isApiResponse = (error: unknown): error is ApiResponse => {
  return typeof error === 'object' && error !== null && 'body' in error;
};
