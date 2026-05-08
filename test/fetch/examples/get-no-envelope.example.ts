// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path.startsWith('/no-envelope'),

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    status: 200,
    body: {
      token: 'test',
      nested: {value: 1},
    },
  }),
});
