/* eslint-disable @typescript-eslint/naming-convention */
import {type CarrierId} from '@myparcel-dev/constants';
import {type ShipmentOptions} from '../shipments';
import {type Address, type AddressWithContactDetails} from '@/types';
import {type PickupLocation} from '@/endpoints/public';

export interface PartnerTrackTraceLink {
  barcode: string;
  uri: string;
}

export type ShipmentStatus = 'registered' | 'handed_to_carrier' | 'sorting' | 'distribution' | 'delivered';

export interface TrackAndTraceStatus {
  main: ShipmentStatus;
  final: boolean;
  current: number;
}

export interface TrackAndTraceLocation {
  name: string;
  countryCode: string;
  city: string;
  postalCode: string;
  street: string;
  number: string;
  numberSuffix: string;
  longitude: number;
  latitude: number;
}

export interface TrackTraceHistory {
  code: string;
  description: string;
  time: string;
  delayed: boolean;
  location: TrackAndTraceLocation;
}

export interface TrackAndTrace {
  shipment_id: number;
  carrier_id: CarrierId;
  // Equal to PostNLStatusCodes status codes in core-api
  code: string;
  description: string;
  time: string;
  link_consumer_portal: string;
  link_tracktrace: string;
  partner_tracktraces: PartnerTrackTraceLink[];
  recipient: AddressWithContactDetails;
  sender: Address;
  options: ShipmentOptions;
  pickup: PickupLocation | null;
  delayed: boolean;
  location: TrackAndTraceLocation | null;
  status: TrackAndTraceStatus;
  history: TrackTraceHistory[];
}
