// noinspection JSUnusedGlobalSymbols

import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/shipments',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        shipments: [
          {
            carrier: 1,
            shipment_options: {
              package_type: 'package',
            },
          },
          {
            carrier: 1,
            shipment_options: {
              package_type: 'package',
            },
          },
          {
            carrier: 1,
            shipment_options: {
              package_type: 'package',
            },
          },
          {
            carrier: 1,
            shipment_options: {
              package_type: 'package',
            },
          },
        ],
        page: 1,
        size: 30,
        results: 4,
      },
    },
  }),
});
