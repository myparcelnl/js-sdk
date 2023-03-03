import {DeliveryTypeName, PackageTypeName, ShipmentOptionName} from '@myparcel/constants';
import {EnumSchema, Timestamp} from '@/types';

interface PossibleShipmentOption {
  name: ShipmentOptionName;
  schema: EnumSchema<boolean>;
}

export interface DeliveryOption {
  date: Timestamp;
  possibilities: DeliveryPossibility[];
}

export interface DeliveryPossibility {
  collect_date?: string;
  delivery_time_frames: [DeliveryTimeFrame<'start'>, DeliveryTimeFrame<'end'>];
  package_type: PackageTypeName;
  shipment_options: PossibleShipmentOption[];
  type: DeliveryTypeName;
}

export interface DeliveryTimeFrame<Type = 'start' | 'end'> {
  date_time: Timestamp;
  type: Type;
}
