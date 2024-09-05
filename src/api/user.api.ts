import OpenAPIClientAxios from 'openapi-client-axios';

import { Client } from '../types/user';

const userApi = new OpenAPIClientAxios({
  definition: 'https://wheelz-user.zcorp.ovh/openapi.json',
});

export const getUserApiClient = async () => {
  const client = await userApi.getClient<Client>();

  //TODO: get token from store
  client.defaults.headers['Authorization'] = `Bearer token`;

  return client;
};
