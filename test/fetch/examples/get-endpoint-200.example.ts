import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path.startsWith('/endpoint?'),

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    status: 200,
    body: {
      data: {
        endpoint: [],
      },
    },
  }),
});
