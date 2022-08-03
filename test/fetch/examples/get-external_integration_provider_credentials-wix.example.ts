import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => {
    return init?.method === 'GET' && path === '/external_integration_provider_credentials/wix';
  },

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        credentials: [],
      },
    },
  }),
});
