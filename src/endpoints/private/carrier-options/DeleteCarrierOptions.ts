import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type DeleteCarrierOptionsDefinition = CreateDefinition<{
  name: typeof DeleteCarrierOptions.name;
  path: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    contract_id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    account_id: number;
  };
}>;

export class DeleteCarrierOptions extends AbstractPrivateEndpoint<DeleteCarrierOptionsDefinition> {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteCarrierOption';
  public readonly path = 'accounts/:account_id/carrier_options/:contract_id';
  public readonly property = 'carrier_options';
}
