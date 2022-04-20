import {PlatformId, PlatformName} from '@/types/myparcel.types';

export const PLATFORM_MYPARCEL_ID: PlatformId = 1;
export const PLATFORM_MYPARCEL_NAME: PlatformName = 'myparcel';
export const PLATFORM_MYPARCEL_HUMAN = 'MyParcel';

export const PLATFORM_SENDMYPARCEL_ID: PlatformId = 2;
export const PLATFORM_SENDMYPARCEL_NAME: PlatformName = 'belgie';
export const PLATFORM_SENDMYPARCEL_HUMAN = 'SendMyParcel';

export const PLATFORM_FLESPAKKET_ID: PlatformId = 3;
export const PLATFORM_FLESPAKKET_NAME: PlatformName = 'flespakket';
export const PLATFORM_FLESPAKKET_HUMAN = 'Flespakket';

export const MYPARCEL = {
  ID: PLATFORM_MYPARCEL_ID,
  NAME: PLATFORM_MYPARCEL_NAME,
  HUMAN: PLATFORM_MYPARCEL_HUMAN,
};

export const SENDMYPARCEL = {
  ID: PLATFORM_SENDMYPARCEL_ID,
  NAME: PLATFORM_SENDMYPARCEL_NAME,
  HUMAN: PLATFORM_SENDMYPARCEL_HUMAN,
};

export const FLESPAKKET = {
  ID: PLATFORM_FLESPAKKET_ID,
  NAME: PLATFORM_FLESPAKKET_NAME,
  HUMAN: PLATFORM_FLESPAKKET_HUMAN,
};

export const ALL = [MYPARCEL, SENDMYPARCEL, FLESPAKKET];
