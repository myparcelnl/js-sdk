// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/paginated/size',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        shipments: [],
        size: 0,
      },
    },
  }),
});
