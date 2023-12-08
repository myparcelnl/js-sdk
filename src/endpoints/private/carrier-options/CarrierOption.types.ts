/* eslint-disable @typescript-eslint/naming-convention */
import {type CarrierId, type CarrierName} from '@myparcel/constants';
import {type IntBoolean} from '@/types';

// @TODO - move to frontend types
export const ContractType = {
  Main: 'main',
  Custom: 'custom',
} as const;

export interface MyParcelCarrierOption {
  api_key: string;
  carrier: {
    id: CarrierId;
    name: CarrierName;
  };
  carrier_id: CarrierId;
  enabled: IntBoolean;
  id: number;
  optional: IntBoolean;
  options: {
    customerCode: string;
    customerNumber: string;
    customerCollectionLocation: string;
    serviceLevels: number;
    barcodeOptions: {
      gpType: string;
      gpRange: string;
    };
  };
  password: string;
  primary: IntBoolean;
  type: 'main' | 'custom';
  username: string;
  subscription_id?: number;
  label?: string;
}

export interface CarrierOptionPostData {
  carrier_id: CarrierId;
  username?: string;
  password?: string;
  options?: Record<string, unknown>;
  api_key?: string;
}
