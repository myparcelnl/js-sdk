/* eslint-disable @typescript-eslint/naming-convention */
import {type Price} from '@/types';
import {
  type SubscriptionProductId,
  type SubscriptionTier,
  type SubscriptionTierName,
  type SubscriptionType,
} from '@/endpoints/private/subscriptions/Subscriptions.types';

export type DashboardSlug =
  | 'shipments'
  | 'returns'
  | 'webshops'
  | 'shipments-weekly'
  | 'returns-weekly'
  | 'webshops-weekly'
  | 'transit-time'
  | 'surcharges'
  | 'cases'
  | 'shipments-t2'
  | 'returns-t2'
  | 'webshops-t2'
  | 'transit-time-t2'
  | 'surcharges-t2'
  | 'cases-t2'
  | 'finance-t2'
  | 'shortcoming-t2'
  | 'shipments-t3'
  | 'returns-t3'
  | 'webshops-t3'
  | 'transit-time-t3'
  | 'surcharges-t3'
  | 'cases-t3'
  | 'finance-t3'
  | 'shortcoming-t3';

export interface SubscriptionConfiguration {
  dashboard_slugs: string[];
  free_shipments_per_month: number;
  max_shipping_rules: number | null;
  shipment_discount_price: Price;
  shipment_discount_product: number;
  shipment_fee_price: Price;
  shipment_fee_product: number;
}

export interface SubscriptionCapability {
  configuration: SubscriptionConfiguration;
  features: string[];
  price: Price;
  tier: SubscriptionTier;
  product_id: SubscriptionProductId;
  product_name: string;
  subscription_type_name: string;
  tier_name: SubscriptionTierName;
  type: SubscriptionType;
}
