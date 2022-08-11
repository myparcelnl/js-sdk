// noinspection JSUnusedGlobalSymbols

import {GetPickupLocations} from '@/endpoints';
import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse<GetPickupLocations>({
  match: (path: string, init?: RequestInit) =>
    init?.method === 'GET' &&
    path === '/pickup_locations?carrier=1&cc=NL&number=31&platform=myparcel&postal_code=2132JE',

  response: () => ({
    headers: {'Content-Type': 'application/json'},
    body: {
      data: {
        pickup_locations: [
          {
            address: {
              cc: 'NL',
              city: 'HOOFDDORP',
              street: 'Marktlaan',
              postal_code: '2132DM',
              number: '124',
              number_suffix: '',
            },
            possibilities: [
              {
                delivery_type_id: 4,
                delivery_type_name: 'pickup',
                moment: {
                  start: {
                    date: '2022-04-14 16:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Amsterdam',
                  },
                },
                price: 0,
              },
            ],
            location: {
              location_name: 'Media Markt Hoofddorp B.V.',
              retail_network_id: 'PNPNL-01',
              distance: '1428',
              latitude: '52.30227039',
              longitude: '4.69345856',
              location_code: '217171',
              phone_number: null,
              opening_hours: {
                monday: [
                  {
                    start: {
                      date: '2022-04-18 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-18 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                tuesday: [
                  {
                    start: {
                      date: '2022-04-19 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-19 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                wednesday: [
                  {
                    start: {
                      date: '2022-04-13 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-13 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                thursday: [
                  {
                    start: {
                      date: '2022-04-14 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-14 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                friday: [
                  {
                    start: {
                      date: '2022-04-15 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-15 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                saturday: [
                  {
                    start: {
                      date: '2022-04-16 10:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-16 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                sunday: [
                  {
                    start: {
                      date: '2022-04-17 12:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-17 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
              },
            },
          },
          {
            address: {
              cc: 'NL',
              city: 'Hoofddorp',
              street: 'Polderplein',
              postal_code: '2132BA',
              number: '1',
              number_suffix: '',
            },
            possibilities: [
              {
                delivery_type_id: 4,
                delivery_type_name: 'pickup',
                moment: {
                  start: {
                    date: '2022-04-14 16:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Amsterdam',
                  },
                },
                price: 0,
              },
            ],
            location: {
              location_name: 'Primera Sanders',
              retail_network_id: 'PNPNL-01',
              distance: '1437',
              latitude: '52.30335598',
              longitude: '4.69465854',
              location_code: '216877',
              phone_number: null,
              opening_hours: {
                monday: [
                  {
                    start: {
                      date: '2022-04-18 11:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-18 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                tuesday: [
                  {
                    start: {
                      date: '2022-04-19 09:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-19 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                wednesday: [
                  {
                    start: {
                      date: '2022-04-13 09:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-13 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                thursday: [
                  {
                    start: {
                      date: '2022-04-14 09:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-14 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                friday: [
                  {
                    start: {
                      date: '2022-04-15 09:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-15 21:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                saturday: [
                  {
                    start: {
                      date: '2022-04-16 09:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-16 18:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                sunday: [
                  {
                    start: {
                      date: '2022-04-17 12:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                    end: {
                      date: '2022-04-17 17:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  }),
});
