import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/delivery_options',

  response: () => ({
    status: 422,
    body: {
      message:
        'The cc field is required. The carrier field is required. The platform field is required. (request_id: 1649780852.44186255a8746bdec)',
      request_id: '1649780852.44186255a8746bdec',
      errors: [
        {
          status: 400,
          code: 3224,
          title: 'The cc field is required. The carrier field is required. The platform field is required.',
          message: 'The cc field is required. The carrier field is required. The platform field is required.',
        },
      ],
    },
  }),
});
