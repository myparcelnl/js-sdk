import {EndpointBody} from '@/model';
import {PACKAGE_NAME} from '@/data/packageTypes';
import {POST_NL_ID} from '@/data/carriers';
import {PostShipments} from '@/endpoints';

export const POST_BODY_SHIPMENTS: EndpointBody<PostShipments> = [
  {
    carrier: POST_NL_ID,
    options: {
      package_type: PACKAGE_NAME,
    },
    recipient: {
      cc: 'NL',
      city: 'Hoofddorp',
      person: 'Ms. Parcel',
      street: 'Antareslaan 31',
    },
  },
];
