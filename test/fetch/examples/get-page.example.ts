// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/paginated/page',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        shipments: [],
        page: 1,
      },
    },
  }),
});
