/* eslint-disable @typescript-eslint/naming-convention */
import {
  type CarrierId,
  type CustomsDeclarationContents,
  type DeliveryTypeId,
  type PackageTypeId,
  type ShipmentStatus,
} from '@myparcel-dev/constants';
import {type Address, type AddressWithContactDetails, type RetailLocation} from '../../../types';
import {type IntBoolean, type Price, type WithRequired} from '@/types';

export interface PostedShipmentReference {
  id: number;
  reference_identifier: string;
}

export interface PhysicalProperties {
  height?: number;
  length?: number;
  volume?: number;
  weight: number;
  width?: number;
}

export interface ShipmentOptions {
  delivery_type: DeliveryTypeId | null;
  package_type: PackageTypeId;
  age_check?: IntBoolean;
  collect?: IntBoolean;
  cooled_delivery?: IntBoolean;
  delivery_date?: string | null;
  drop_off_at_postal_point?: IntBoolean;
  extra_assurance?: IntBoolean;
  hide_sender?: IntBoolean;
  insurance?: Price;
  label_description?: string;
  large_format?: IntBoolean;
  only_recipient?: IntBoolean;
  return?: IntBoolean;
  same_day_delivery?: IntBoolean;
  saturday_delivery?: IntBoolean;
  signature?: IntBoolean;
}

export interface CustomsDeclarationItem {
  amount: number;
  classification: string;
  country?: string;
  description: string;
  item_value?: Price;
  weight: number;
}

export interface ShipmentCustomsDeclaration {
  contents: CustomsDeclarationContents;
  eori_number?: string | null;
  invoice?: string | null;
  items: CustomsDeclarationItem[];
  vat_number?: string | null;
  weight: number;
}

export interface ShipmentGeneralSettings {
  delivery_notification?: IntBoolean;
  delivery_notification_email?: string[];
  disable_auto_detect_pickup?: IntBoolean;
  printer_identifier?: string;
  save_recipient_address?: IntBoolean;
  tracktrace?: {
    bcc: IntBoolean;
    bcc_email: string;
    carrier_email_basic_notification: IntBoolean;
    delivery_notification: IntBoolean;
    email_on_handed_to_courier: IntBoolean;
    from_address_company: string;
    from_address_email: string;
    send_track_trace_emails: IntBoolean;
  };
}

export interface ShipmentPickup {
  box_number?: string;
  cc?: string;
  city?: string;
  location_code?: string;
  location_name?: string;
  number?: string;
  number_suffix?: string;
  postal_code?: string;
  region?: string;
  retail_network_id?: string;
  state?: string;
  street?: string;
}

export interface ShipmentPostData {
  account_id?: number;
  carrier: CarrierId;
  customs_declaration?: ShipmentCustomsDeclaration | null;
  delivered?: 0;
  general_settings?: ShipmentGeneralSettings;
  hidden?: IntBoolean;
  options?: ShipmentOptions;
  physical_properties?: PhysicalProperties;
  pickup?: ShipmentPickup | null;
  recipient: WithRequired<Address, 'number'> | WithRequired<Address, 'street'>;
  reference_identifier?: number | string;
  shop_id?: number;
  status?: ShipmentStatus;
}

interface ShippedItem {
  order_identifier: string;
  order_line: {
    external_identifier: null;
    instructions: null;
    price: number;
    price_after_vat: number;
    product: {
      external_identifier: string;
      height: number;
      length: number;
      name: string;
      sku: string;
      weight: number;
      width: number;
    };
    quantity: number;
    shippable: boolean;
    uuid: string;
    vat: null;
    vat_percentage: null;
  };
  order_line_identifier: string;
  quantity: number;
}

export interface MyParcelShipment {
  account_id: number;
  api_key: string | null;
  barcode: string | null;
  carrier_id: CarrierId;
  collection_contact: string | null;
  contract_id: number;
  created: Date;
  created_by: number;
  customs_declaration: ShipmentCustomsDeclaration | null;
  delayed: boolean;
  delivered: boolean;
  drop_off_point: RetailLocation | null;
  external_identifier: string | null;
  external_provider: null;
  external_provider_id: null;
  general_settings: ShipmentGeneralSettings;
  hidden: boolean;
  id: number;
  is_return: boolean;
  link_consumer_portal: string | null;
  modified: Date;
  modified_by: number;
  multi_collo: boolean;
  multi_collo_main_shipment_id: string | null;
  options: ShipmentOptions;
  origin: string | null;
  parent_id: number | null;
  partner_track_traces: unknown[];
  partner_tracktraces: unknown[];
  payment_status: string;
  physical_properties: PhysicalProperties | null;
  pickup: RetailLocation | null;
  pickup_request_number: null;
  platform_id: number;
  price: Price;
  recipient: AddressWithContactDetails;
  reference_identifier: string | null;
  region: string;
  secondary_shipments: unknown[];
  sender: AddressWithContactDetails;
  shipment_type: number | null;
  shipped_items: ShippedItem[];
  shop_id: number;
  status: number | null;
  transaction_status: string;
  user_agent: string | null;
}

export interface ShipmentPatchData {
  id: number;
  hidden?: IntBoolean;
  status?: ShipmentStatus;
  delivered?: IntBoolean;
}
