import {type SystemCountryCodesPerCountry, type GetSystemCountryCodesParams} from './SystemCountryCodes.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetSystemCountryCodesDefinition = CreateDefinition<{
  name: typeof GetSystemCountryCodes.name;
  parameters: GetSystemCountryCodesParams;
  response: SystemCountryCodesPerCountry;
}>;

export class GetSystemCountryCodes extends AbstractPrivateEndpoint<GetSystemCountryCodesDefinition> {
  public readonly name = 'getSystemCountryCodes';
  public readonly path = 'system_country_codes';
  public readonly property = 'countries';
}
