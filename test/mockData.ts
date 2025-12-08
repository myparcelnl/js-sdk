import {CarrierId, DeliveryTypeId, PackageTypeId} from '@myparcel-dev/constants';
import {type EndpointBody} from '@/model';
import {type PostShipments} from '@/endpoints';

export const POST_BODY_SHIPMENTS: EndpointBody<PostShipments> = [
  {
    carrier: CarrierId.PostNl,
    options: {
      package_type: PackageTypeId.Package,
      delivery_type: DeliveryTypeId.Standard,
    },
    recipient: {
      cc: 'NL',
      city: 'Hoofddorp',
      person: 'Ms. Parcel',
      street: 'Antareslaan 31',
      postal_code: '2132 JE',
    },
  },
];
