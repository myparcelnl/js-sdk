/* eslint-disable @typescript-eslint/naming-convention */
import {type CarrierId, type CarrierName} from '@myparcel/constants';
import {type IntBoolean} from '@/types';

export type MyParcelCarrierOption = {
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
};

export interface CarrierOptionPostData {
  carrier_id: CarrierId;
  username?: string;
  password?: string;
  options?: Record<string, unknown>;
  api_key?: string;
}

export interface CarrierOptionPutData {
  carrier_id: CarrierId;
  enabled: IntBoolean;
}

export interface CarrierOptionsParameters {
  enabled?: IntBoolean;
  // You can pass multiple carrier_ids in a string when joined with `;`
  carrier_id?: CarrierId | string;
  subscription_id?: number;
  type: 'main' | 'custom';
}
