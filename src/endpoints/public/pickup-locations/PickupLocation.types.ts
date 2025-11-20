import {type DeliveryTypeId, type DeliveryTypeName} from '@myparcel-dev/constants';
import {type StartEndDate, type Timestamp, type Weekday} from '@/types';

export interface PickupLocation {
  address: {
    cc: string;
    city: string;
    number: string;
    number_suffix: string;
    postal_code: string;
    street: string;
  };
  location: {
    distance: string;
    latitude: string;
    location_code: string;
    location_name: string;
    longitude: string;
    opening_hours: Record<Weekday, StartEndDate[]>;
    phone_number: string | null;
    retail_network_id: string;
  };
  possibilities: PickupPossibility[];
}

export interface PickupPossibility {
  delivery_type_id: DeliveryTypeId;
  delivery_type_name: DeliveryTypeName;
  moment: {
    start: Timestamp;
  };
  price?: number;
}
