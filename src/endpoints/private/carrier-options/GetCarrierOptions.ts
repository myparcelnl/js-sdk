import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type MyParcelCarrierOption} from './CarrierOption.types';

type GetCarrierOptionsDefinition = CreateDefinition<{
  name: typeof GetCarrierOptions.name;
  parameters: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    account_id: number;
  };
  response: MyParcelCarrierOption[];
}>;

export class GetCarrierOptions extends AbstractPrivateEndpoint<GetCarrierOptionsDefinition> {
  public readonly name = 'getCarrierOptions';
  public readonly path = 'carrier_management/accounts/:account_id/carrier_options';
  public readonly property = 'carrier_options';
}
