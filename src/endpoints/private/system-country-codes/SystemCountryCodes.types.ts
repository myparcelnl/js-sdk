import {type CarrierId} from '@myparcel/constants';

export interface SystemCountryCode {
  label: string;
  region: string;
}

export type SystemCountryCodesPerCountry = Record<string, SystemCountryCode>[];

export type GetSystemCountryCodesParams = {
  carrier_id?: CarrierId;
  unfiltered?: boolean;
};
