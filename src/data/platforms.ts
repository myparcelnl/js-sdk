import {PlatformId, PlatformName} from '@/types/myparcel.types';

export const MYPARCEL_ID: PlatformId = 1;
export const MYPARCEL_NAME: PlatformName = 'myparcel';
export const MYPARCEL_HUMAN = 'MyParcel';

export const SENDMYPARCEL_ID: PlatformId = 2;
export const SENDMYPARCEL_NAME: PlatformName = 'belgie';
export const SENDMYPARCEL_HUMAN = 'SendMyParcel';

export const FLESPAKKET_ID: PlatformId = 3;
export const FLESPAKKET_NAME: PlatformName = 'flespakket';
export const FLESPAKKET_HUMAN = 'Flespakket';

export const MYPARCEL = {
  ID: MYPARCEL_ID,
  NAME: MYPARCEL_NAME,
  HUMAN: MYPARCEL_HUMAN,
};

export const SENDMYPARCEL = {
  ID: SENDMYPARCEL_ID,
  NAME: SENDMYPARCEL_NAME,
  HUMAN: SENDMYPARCEL_HUMAN,
};

export const FLESPAKKET = {
  ID: FLESPAKKET_ID,
  NAME: FLESPAKKET_NAME,
  HUMAN: FLESPAKKET_HUMAN,
};

export const ALL = [MYPARCEL, SENDMYPARCEL, FLESPAKKET];
