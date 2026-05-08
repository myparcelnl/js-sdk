// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'POST' && path === '/no-envelope',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    status: 200,
    body: {
      ok: true,
    },
  }),
});
