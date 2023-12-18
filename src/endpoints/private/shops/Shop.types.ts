/* eslint-disable @typescript-eslint/naming-convention */
import {type Address, type IntBoolean} from '@/types';

export interface ShopBranding {
  accent_color: string;
  enable_returns: boolean;
  enable_track_trace: boolean;
  subdomain: string;
  use_consumer_portal: boolean;
}

export interface ShopBilling {
  address: Address;
  billing_method: 1 | 2 | 3 | 4;
  coc?: string;
  cycle: 'monthly' | 'weekly';
  eori_number?: string;
  iban?: string;
  reference: string;
  vat_number_uk?: string;
  vat_number?: string;
}

export interface ReturnReason {
  human: string;
  name: string;
}

export interface ShopReturnReasons {
  enabled: boolean;
  mandatory: boolean;
  return_reasons: ReturnReason[];
}

export interface ShopReturn {
  address: Address;
  bcc: IntBoolean;
  email_address_for_tracktrace_return_shipments: string;
  from_address_name?: string;
  link_expires_after?: number;
  send_tracktrace_email_for_return_shipments: IntBoolean;
  settle_printerless_return_cost: IntBoolean;
  use_custom_description: IntBoolean;
  use_printerless_return: IntBoolean;
  use_shop_shipment_options: IntBoolean;
}

export interface ShopSettings {
  auto_save_addresses: IntBoolean;
  default_collect_address_id?: number;
  label_description: string;
  label_format_locked: IntBoolean;
  label_format: 'A4' | 'A6';
  preferred_locale?: string;
  reminder_email: IntBoolean;
  use_logo_label: IntBoolean;
  weight: number;
}

export interface ShopTrackTrace {
  bcc_email: string;
  bcc: IntBoolean;
  carrier_email_basic_notification: IntBoolean;
  delivery_notification: IntBoolean;
  email_on_handed_to_courier: IntBoolean;
  from_address_company: string;
  from_address_email: string;
  send_track_trace_emails: IntBoolean;
}

export interface MyParcelShop {
  account_id: number;
  billing: ShopBilling;
  branding: ShopBranding;
  created: string;
  general_settings: ShopSettings;
  hidden: boolean;
  id: number;
  modified: string;
  name: string;
  platform_id: number;
  return_reason_settings: ShopReturnReasons;
  return: ShopReturn;
  tracktrace: ShopTrackTrace;
}
