import {
  type CarrierNameOrId,
  type DeliveryTypeId,
  type PackageTypeName,
  type PlatformNameOrId,
} from '@myparcel/constants';
import {type RequestHeaders} from '@/types/request.types';
import {type WithRequired} from '@/types/global.types';
import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type DeliveryOption} from '@/endpoints/public/delivery-options/DeliveryOption.types';

type Parameters = {
  /* eslint-disable @typescript-eslint/naming-convention */
  carrier: CarrierNameOrId;
  cc: string;
  platform: PlatformNameOrId;
  postal_code: string;

  city?: string;
  cutoff_time?: string;
  delivery_date?: string;
  delivery_time?: string;
  deliverydays_window?: number;
  dropoff_days?: string;
  dropoff_delay?: number;
  exclude_delivery_type?: DeliveryTypeId;
  exclude_parcel_lockers?: boolean;
  include?: 'shipment_options' | string;
  latitude?: string;
  longitude?: string;
  monday_delivery?: boolean;
  number?: number;
  package_type?: PackageTypeName;
  saturday_delivery?: boolean;
  same_day_delivery?: boolean;
  street?: string;
  /* eslint-enable @typescript-eslint/naming-convention */
};

/**
 * Either number or full street is required.
 */
export type DeliveryOptionsParameters = WithRequired<Parameters, 'number'> | WithRequired<Parameters, 'street'>;

type GetDeliveryOptionsDefinition = CreateDefinition<{
  name: typeof GetDeliveryOptions.name;
  parameters: DeliveryOptionsParameters;
  response: DeliveryOption[];
}>;

/**
 * Get available delivery options for given location. Note: This calls version 2 of the endpoint.
 */
export class GetDeliveryOptions extends AbstractPublicEndpoint<GetDeliveryOptionsDefinition> {
  public readonly name = 'getDeliveryOptions';
  public readonly path = 'delivery_options';
  public readonly property = 'deliveries';

  public getHeaders(): RequestHeaders {
    return {...super.getHeaders(), Accept: 'application/json;version=2.0'};
  }
}
