// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/timeout',

  response: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          headers: {'Content-Type': 'application/json'},
          status: 200,
          body: {
            data: {
              endpoint: [],
            },
          },
        });
      }, 199);
    });
  },
});
