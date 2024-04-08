/* eslint-disable @typescript-eslint/naming-convention */
import {type PlatformId} from '@myparcel/constants';
import {type Address} from '@/types/common.types';
import {type PaginationParameters, type IntBoolean, type Price} from '@/types';
import {type MyParcelShop} from '@/endpoints/private/shops/Shop.types';

export interface AccountAdditionalInfo {
  ecommerce_platform: string;
  phone: string;
  coupon: string;
}

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
  has_carrier_small_package_contract: IntBoolean;
  use_mfa: IntBoolean;
  postnl_weight_unit_grams: IntBoolean;
  allow_printerless_return: IntBoolean;
}

export type AccountStatus = 1 | 2 | 3 | 4;

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
  status: AccountStatus;
  terms_agreed: boolean;
  username: string;
  users: Record<string, unknown>;
}

export type GetAccountsParams = PaginationParameters & {
  status?: AccountStatus;
  from?: string;
  to?: string;
  q?: string;
  platform_id?: PlatformId;
};
