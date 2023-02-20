// noinspection JSUnusedGlobalSymbols

import {DeliveryTypeId, DeliveryTypeName} from '@/types/myparcel.types';

export const MORNING_ID: DeliveryTypeId = 1;

export const MORNING_NAME: DeliveryTypeName = 'morning';

export const STANDARD_ID: DeliveryTypeId = 2;

export const STANDARD_NAME: DeliveryTypeName = 'standard';

export const EVENING_ID: DeliveryTypeId = 3;

export const EVENING_NAME: DeliveryTypeName = 'evening';

export const PICKUP_ID: DeliveryTypeId = 4;

export const PICKUP_NAME: DeliveryTypeName = 'pickup';

export const MORNING = {
  ID: MORNING_ID,
  NAME: MORNING_NAME,
};

export const STANDARD = {
  ID: STANDARD_ID,
  NAME: STANDARD_NAME,
};

export const EVENING = {
  ID: EVENING_ID,
  NAME: EVENING_NAME,
};

export const PICKUP = {
  ID: PICKUP_ID,
  NAME: PICKUP_NAME,
};

export const ALL = [MORNING, STANDARD, EVENING, PICKUP];
