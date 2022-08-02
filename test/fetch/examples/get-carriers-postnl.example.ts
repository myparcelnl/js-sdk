import {GetCarrier} from '@/endpoints/public/carriers';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse<GetCarrier>({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/carriers/postnl',

  response: () => ({
    body: {
      data: {
        carriers: [
          {
            id: 1,
            name: 'postnl',
            human: 'PostNL',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/postnl.svg',
              logo_png: '/skin/general-images/carrier-logos/postnl.png',
            },
          },
        ],
      },
    },
  }),
});
