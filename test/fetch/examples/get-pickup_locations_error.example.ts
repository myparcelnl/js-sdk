import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/pickup_locations',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      message: ' (request_id: 1649768916.0403625579d409d84)',
      request_id: '1649768916.0403625579d409d84',
      errors: [
        {
          code: 3212,
          message: 'cc is required',
        },
        {
          code: 3212,
          message: 'postal_code is required',
        },
        {
          code: 3212,
          message: 'number is required',
        },
      ],
    },
  }),
});
