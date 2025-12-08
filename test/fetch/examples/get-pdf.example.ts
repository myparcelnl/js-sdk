// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/pdf',

  response: () => ({
    status: 200,
    headers: new Headers({'Content-Type': 'application/pdf'}),
    body: 'blob'
  }),
});
