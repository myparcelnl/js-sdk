// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path.startsWith('/get200NoResponseProperty'),

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    status: 200,
    body: {
      data: {
        token: 'test',
        credentials: {
          username: 'test',
          password: 'test',
        },
      },
    },
  }),
});
