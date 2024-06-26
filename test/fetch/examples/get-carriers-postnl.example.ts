// noinspection JSUnusedGlobalSymbols

import {CarrierName} from '@myparcel/constants';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';
import {type GetCarrier} from '@/endpoints/public/carriers';

export default defineMockResponse<GetCarrier>({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/carriers/postnl',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        carriers: [
          {
            id: 1,
            name: CarrierName.PostNl,
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
