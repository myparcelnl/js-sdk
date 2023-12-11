/* eslint-disable @typescript-eslint/naming-convention */
import {type Address} from '@/types/common.types';
import {type MyParcelShop} from '@/endpoints/private/shops/Shop.types';
import { IntBoolean, Price } from '@/types';

export interface AccountAdditionalInfo {
  ecommerce_platform: string;
  phone: string;
  coupon: string;
}

// @TODO - move to frontend types
export const ShipmentLabel = {
  Apart: 'apart',
  Nested: 'nested',
  None: 'none',
} as const;

export interface AccountSettings {
  affiliate_bcc: IntBoolean;
  affiliate_fee: Price;
  is_test: IntBoolean;
  order_mode: IntBoolean;
  order_feature: boolean;
  order_Settings: {
    shipment_label: 'apart' | 'nested' | 'none';
  };
  show_cumulio_dashboard: IntBoolean;
  has_carrier_contract: IntBoolean;
  has_carrier_mail_contract: IntBoolean;
  use_mfa: IntBoolean;
}

export interface MyParcelAccount {
  additional_info: AccountAdditionalInfo;
  carrier_references: [];
  contact_id: number;
  contact: Record<string, string>;
  created: string;
  delivery_address: null | Address;
  email: string;
  first_name: string;
  gender: string;
  general_Settings: AccountSettings;
  id: number;
  last_name: string;
  modified: string;
  origin_id: number;
  phone: string;
  platform_id: number;
  shipment_estimates: Record<string, unknown>;
  shops: MyParcelShop[];
  status: number;
  terms_agreed: boolean;
  username: string;
  users: Record<string, unknown>;
}
