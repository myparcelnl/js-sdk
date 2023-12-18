import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CarrierId} from '@myparcel/constants';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type SystemCountryCodesPerCountry} from './SystemCountryCodes.types';

type GetSystemCountryCodesDefinition = CreateDefinition<{
  name: typeof GetSystemCountryCodes.name;
  parameters: {
    carrier_id?: CarrierId;
  };
  response: SystemCountryCodesPerCountry;
}>;

export class GetSystemCountryCodes extends AbstractPrivateEndpoint<GetSystemCountryCodesDefinition> {
  public readonly name = 'getSystemCountryCodes';
  public readonly path = 'system_country_codes';
  public readonly property = 'countries';
}
