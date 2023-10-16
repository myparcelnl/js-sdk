// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/endpoint/inline',

  response: () => ({
    status: 200,
    headers: new Headers({'Content-Type': 'text/html', 'Content-Disposition': 'inline'}),
    body: 'Test',
  }),
});
