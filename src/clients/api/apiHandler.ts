import type { ApiFetcher } from '@ts-rest/core';
import type { AxiosError, AxiosResponse } from 'axios';
import axios, { isAxiosError, type Method } from 'axios';

import { useAuthStore } from '../../stores/useAuthStore';
export interface ApiError {
  status: number;
  body: unknown;
  headers: Headers;
}
export const createApiHandler = (): ApiFetcher => {
  return async ({ path, method, headers, body }) => {
    const token = useAuthStore.getState().token;
    try {
      const result = await axios.request({
        method: method as Method,
        url: path,
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
        data: body,
      });
      return {
        status: result.status,
        body: result.data,
        // @ts-expect-error toJSON is not typed
        headers: new Headers(result.headers.toJSON()),
      };
    } catch (error_) {
      if (isAxiosError(error_)) {
        const error = error_ as AxiosError;
        const response = error.response as AxiosResponse;
        return {
          status: response.status,
          body: response.data,
          // @ts-expect-error toJSON is not typed
          headers: new Headers(response?.headers?.toJSON() || ''),
        } as ApiError;
      }
      throw error_;
    }
  };
};
