import {PostShipments} from '@/endpoints';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse<PostShipments>({
  match: (path: string, init?: RequestInit) => init?.method === 'POST' && path === '/shipments',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        ids: [1234567],
      },
    },
  }),
});
