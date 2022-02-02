import {CarrierId, CarrierName} from '@/types/myparcel.types';

export interface Carrier {
  id: CarrierId;
  name: CarrierName;
  human: string;
  meta: {
    logo_svg: string;
    logo_png: string;
  };
}
