import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CarrierId} from '@myparcel/constants';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type HttpMethod} from '@/types';

type DeleteCarrierOptionsDefinition = CreateDefinition<{
  name: typeof DeleteCarrierOptions.name;
  path: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    carrier_id: CarrierId;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    account_id: number;
  };
}>;

export class DeleteCarrierOptions extends AbstractPrivateEndpoint<DeleteCarrierOptionsDefinition> {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteCarrierOption';
  public readonly path = 'accounts/:account_id/carrier_options/:carrier_id';
  public readonly property = 'carrier_options';
}
