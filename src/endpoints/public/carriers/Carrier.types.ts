import {CarrierId, CarrierName} from '@myparcel/constants';

export interface Carrier {
  id: CarrierId;
  name: CarrierName;
  human: string;
  meta: {
    logo_svg: string;
    logo_png: string;
  };
}
