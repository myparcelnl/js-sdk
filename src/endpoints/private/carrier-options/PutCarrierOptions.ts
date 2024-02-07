import {type CarrierOptionPutData} from './CarrierOption.types';
import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PutCarrierOptionsDefinition = CreateDefinition<{
  name: typeof PutCarrierOptions.name;
  path: {
    account_id: number;
  };
  body: CarrierOptionPutData[];
}>;

/**
 * Retrieve carrier options for an account
 */
export class PutCarrierOptions extends AbstractPrivateEndpoint<PutCarrierOptionsDefinition> {
  public readonly name = 'putCarrierOptions';
  public readonly path = 'carrier_management/accounts/:account_id/carrier_options';
  public readonly property = 'carrier_options';
  public readonly method: HttpMethod = 'PUT';
}
