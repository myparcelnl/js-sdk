// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'PUT' && path === '/endpoint/204',

  response: () => ({
    status: 204,
    body: undefined,
  }),
});
