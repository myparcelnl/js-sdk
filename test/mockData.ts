import {CarrierId, PackageTypeId} from '@myparcel/constants';
import {EndpointBody} from '@/model';
import {PostShipments} from '@/endpoints';

export const POST_BODY_SHIPMENTS: EndpointBody<PostShipments> = [
  {
    carrier: CarrierId.PostNl,
    options: {
      package_type: PackageTypeId.Package,
    },
    recipient: {
      cc: 'NL',
      city: 'Hoofddorp',
      person: 'Ms. Parcel',
      street: 'Antareslaan 31',
    },
  },
];
