import {type MyParcelCarrierOption, type CarrierOptionsParameters} from './CarrierOption.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetCarrierOptionsDefinition = CreateDefinition<{
  name: typeof GetCarrierOptions.name;
  path: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    account_id: number;
  };
  parameters: CarrierOptionsParameters;
  response: MyParcelCarrierOption[];
}>;

export class GetCarrierOptions extends AbstractPrivateEndpoint<GetCarrierOptionsDefinition> {
  public readonly name = 'getCarrierOptions';
  public readonly path = 'carrier_management/accounts/:account_id/carrier_options';
  public readonly property = 'carrier_options';
}
