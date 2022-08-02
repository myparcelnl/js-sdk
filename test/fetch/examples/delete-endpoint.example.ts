import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'DELETE' && path === '/endpoint',

  response: () => ({
    status: 204,
  }),
});
