import {CarrierId, CarrierName} from '@/types/myparcel.types';

interface Carrier {
  ID: CarrierId;
  NAME: CarrierName;
  HUMAN: string;
}

export const POST_NL_ID: CarrierId = 1;
export const POST_NL_NAME: CarrierName = 'postnl';
export const POST_NL_HUMAN = 'PostNL';

export const BPOST_ID: CarrierId = 2;
export const BPOST_NAME: CarrierName = 'bpost';
export const BPOST_HUMAN = 'bpost';

export const CHEAP_CARGO_ID: CarrierId = 3;
export const CHEAP_CARGO_NAME: CarrierName = 'cheapcargo';
export const CHEAP_CARGO_HUMAN = 'Cheap Cargo';

export const DPD_ID: CarrierId = 4;
export const DPD_NAME: CarrierName = 'dpd';
export const DPD_HUMAN = 'DPD';

export const INSTABOX_ID: CarrierId = 5;
export const INSTABOX_NAME: CarrierName = 'instabox';
export const INSTABOX_HUMAN = 'Instabox';

export const DHL_ID: CarrierId = 6;
export const DHL_NAME: CarrierName = 'dhl';
export const DHL_HUMAN = 'DHL';

export const BOL_COM_ID: CarrierId = 7;
export const BOL_COM_NAME: CarrierName = 'bol.com';
export const BOL_COM_HUMAN = 'Bol.com';

export const UPS_ID: CarrierId = 8;
export const UPS_NAME: CarrierName = 'ups';
export const UPS_HUMAN = 'UPS';

export const POSTNL: Carrier = {
  NAME: POST_NL_NAME,
  ID: POST_NL_ID,
  HUMAN: POST_NL_HUMAN,
};

export const BPOST = {
  NAME: BPOST_NAME,
  ID: BPOST_ID,
  HUMAN: BPOST_HUMAN,
};

export const CHEAP_CARGO = {
  NAME: CHEAP_CARGO_NAME,
  ID: CHEAP_CARGO_ID,
  HUMAN: CHEAP_CARGO_HUMAN,
};

export const DPD = {
  NAME: DPD_NAME,
  ID: DPD_ID,
  HUMAN: DPD_HUMAN,
};

export const INSTABOX = {
  NAME: INSTABOX_NAME,
  ID: INSTABOX_ID,
  HUMAN: INSTABOX_HUMAN,
};

export const DHL = {
  NAME: DHL_NAME,
  ID: DHL_ID,
  HUMAN: DHL_HUMAN,
};

export const BOL_COM = {
  NAME: BOL_COM_NAME,
  ID: BOL_COM_ID,
  HUMAN: BOL_COM_HUMAN,
};

export const UPS = {
  NAME: UPS_NAME,
  ID: UPS_ID,
  HUMAN: UPS_HUMAN,
};
