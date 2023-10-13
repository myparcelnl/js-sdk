// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/endpoint/attachment',

  response: () => ({
    status: 200,
    headers: new Headers({'Content-Type': 'image/jpeg', 'Content-Disposition': 'attachment; filename="test.jpg"'}),
    body: 'blob',
  }),
});
