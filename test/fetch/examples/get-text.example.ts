// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/endpoint/text',

  response: () => ({
    status: 200,
    headers: new Headers({'Content-Type': 'text/plain'}),
    body: 'plain text',
  }),
});
