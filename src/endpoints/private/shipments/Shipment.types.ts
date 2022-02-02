import {
  CarrierId,
  CustomsDeclarationContents,
  DeliveryTypeId,
  PackageTypeName,
  ShipmentStatus,
} from '@/types/myparcel.types';
import {IntBoolean, Price, WithRequired} from '@/types';

export interface ShipmentRecipient {
  area?: string;
  box_number?: string;
  cc: string;
  city: string;
  company?: string;
  email?: string;
  number?: string;
  number_suffix?: string;
  person: string;
  phone?: string;
  postal_code?: string;
  region?: string;
  state?: string;
  street: string;
  street_additional_info?: string;
}

export interface PhysicalProperties {
  height?: number;
  length?: number;
  volume?: number;
  weight: number;
  width?: number;
}

export interface ShipmentOptions {
  age_check?: IntBoolean;
  cooled_delivery?: IntBoolean;
  delivery_date?: string | null;
  delivery_type?: DeliveryTypeId | null;
  insurance?: Price;
  label_description?: string;
  large_format?: IntBoolean;
  only_recipient?: IntBoolean;
  package_type: PackageTypeName;
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
  recipient: WithRequired<ShipmentRecipient, 'number'> | WithRequired<ShipmentRecipient, 'street'>;
  reference_identifier?: number | string;
  shop_id?: number;
  status?: ShipmentStatus;
}

export interface MyParcelShipment {
  carrier: CarrierId;
  shipment_options: ShipmentOptions;
}
