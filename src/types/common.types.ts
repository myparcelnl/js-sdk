/* eslint-disable @typescript-eslint/naming-convention */

export interface Address {
  area?: string;
  box_number?: string;
  cc: string;
  city: string;
  company?: string;
  eori_number?: string;
  number?: string;
  number_suffix?: string;
  person: string;
  postal_code: string;
  region?: string;
  state?: string;
  street: string;
  street_additional_info?: string;
  vat_number?: string;
}

export interface AddressWithContactDetails extends Address {
  email?: string;
  phone?: string;
}

export interface RetailLocation {
  cc: string;
  city: string;
  location_code: string;
  location_name: string;
  number: string;
  postal_code: string;
  retail_network_id: string;
  street: string;
}
