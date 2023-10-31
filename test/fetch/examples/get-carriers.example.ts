// noinspection JSUnusedGlobalSymbols

import {CarrierId, CarrierName} from '@myparcel/constants';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';
import {type GetCarriers} from '@/endpoints/public/carriers';

export default defineMockResponse<GetCarriers>({
  match: (path: string, init?: RequestInit) => init?.method === 'GET' && path === '/carriers',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        carriers: [
          {
            id: CarrierId.PostNl,
            name: CarrierName.PostNl,
            human: 'PostNL',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/postnl.svg',
              logo_png: '/skin/general-images/carrier-logos/postnl.png',
            },
          },
          {
            id: CarrierId.Bpost,
            name: CarrierName.Bpost,
            human: 'bpost',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/bpost.svg',
              logo_png: '/skin/general-images/carrier-logos/bpost.png',
            },
          },
          {
            id: CarrierId.CheapCargo,
            name: CarrierName.CheapCargo,
            human: 'Cheap Cargo',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/cheapcargo.svg',
              logo_png: '/skin/general-images/carrier-logos/cheapcargo.png',
            },
          },
          {
            id: CarrierId.Dpd,
            name: CarrierName.Dpd,
            human: 'DPD',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/dpd.svg',
              logo_png: '/skin/general-images/carrier-logos/dpd.png',
            },
          },
          {
            id: CarrierId.Dhl,
            name: CarrierName.Dhl,
            human: 'DHL',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/dhl.svg',
              logo_png: '/skin/general-images/carrier-logos/dhl.png',
            },
          },
          {
            id: CarrierId.Ups,
            name: CarrierName.Ups,
            human: 'UPS',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/ups.svg',
              logo_png: '/skin/general-images/carrier-logos/ups.png',
            },
          },
          {
            id: CarrierId.BolCom,
            name: CarrierName.BolCom,
            human: 'bol',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/bol.com.svg',
              logo_png: '/skin/general-images/carrier-logos/bol.com.png',
            },
          },
          {
            id: CarrierId.Instabox,
            name: CarrierName.Instabox,
            human: 'Instabox',
            meta: {
              logo_svg: '/skin/general-images/carrier-logos/svg/instabox.svg',
              logo_png: '/skin/general-images/carrier-logos/instabox.png',
            },
          },
        ],
      },
    },
  }),
});
