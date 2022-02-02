import {PostShipments} from '@/endpoints';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse<PostShipments>({
  match: (path: string, init?: RequestInit) => init?.method === 'POST' && path === '/shipments',

  response: () => ({
    data: {ids: [1234567]},
  }),
});
