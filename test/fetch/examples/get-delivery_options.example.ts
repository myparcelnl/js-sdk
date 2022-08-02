import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) =>
    init?.method === 'GET' &&
    path === '/delivery_options?carrier=1&cc=NL&number=31&platform=myparcel&postal_code=2132JE&cutoff_time=17:00',

  response: () => ({
    body: {
      data: {
        deliveries: [
          {
            date: {
              date: '2022-04-13 00:00:00.000000',
              timezone_type: 3,
              timezone: 'Europe/Amsterdam',
            },
            possibilities: [
              {
                type: 'morning',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-13 08:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-13 12:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
              {
                type: 'standard',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-13 11:30:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-13 14:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'age_check',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
            ],
          },
          {
            date: {
              date: '2022-04-14 00:00:00.000000',
              timezone_type: 3,
              timezone: 'Europe/Amsterdam',
            },
            possibilities: [
              {
                type: 'morning',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-14 08:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-14 12:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
              {
                type: 'standard',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-14 11:30:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-14 14:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'age_check',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
            ],
          },
          {
            date: {
              date: '2022-04-15 00:00:00.000000',
              timezone_type: 3,
              timezone: 'Europe/Amsterdam',
            },
            possibilities: [
              {
                type: 'morning',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-15 08:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-15 12:00:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
              {
                type: 'standard',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-15 11:15:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-15 13:45:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'age_check',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
            ],
          },
          {
            date: {
              date: '2022-04-16 00:00:00.000000',
              timezone_type: 3,
              timezone: 'Europe/Amsterdam',
            },
            possibilities: [
              {
                type: 'standard',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-16 08:30:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-16 21:30:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'age_check',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
            ],
          },
          {
            date: {
              date: '2022-04-19 00:00:00.000000',
              timezone_type: 3,
              timezone: 'Europe/Amsterdam',
            },
            possibilities: [
              {
                type: 'standard',
                package_type: 'package',
                delivery_time_frames: [
                  {
                    type: 'start',
                    date_time: {
                      date: '2022-04-19 11:15:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                  {
                    type: 'end',
                    date_time: {
                      date: '2022-04-19 13:45:00.000000',
                      timezone_type: 3,
                      timezone: 'Europe/Amsterdam',
                    },
                  },
                ],
                shipment_options: [
                  {
                    name: 'large_format',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'only_recipient',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'signature',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'age_check',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                  {
                    name: 'return',
                    schema: {
                      type: 'boolean',
                      enum: [true, false],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  }),
});
