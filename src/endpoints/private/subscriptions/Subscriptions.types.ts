/* eslint-disable @typescript-eslint/naming-convention */
export type SubscriptionProductId =
  | 4610
  | 4611
  | 4612
  | 4613
  | 4614
  | 4615
  | 4616
  | 4617
  | 4618
  | 4700
  | 4701
  | 4702
  | 4703
  | 4800
  | 4801
  | 4802
  | 4803;

export type SubscriptionTier = 0 | 1 | 2 | 3 | 4 | 5;

export type SubscriptionTierName = 'light' | 'start' | 'plus' | 'premium' | 'max';

export type SubscriptionType = 'my_contracts' | 'my_analytics' | 'my_orders' | 'bundle';

export type SubscriptionStatus =
  | 'active'
  | 'ended'
  | 'pending'
  | 'starting_soon'
  | 'ending_soon'
  | 'trial_active'
  | 'trial_ended';

export type MyParcelSubscription = {
  account_id: number;
  billing_period_end: string;
  billing_shop_id: number;
  end: string | null;
  id: number;
  product_id: SubscriptionProductId;
  start: string;
  status: SubscriptionStatus;
  tier: SubscriptionTier;
  trial_end: string | null;
  type: SubscriptionType;
};

export interface SubscriptionPostData {
  account_id: number;
  start: string;
  billing_shop_id: number;
  product_id: SubscriptionProductId;
}

export interface SubscriptionPatchData {
  id: number;
  billing_shop_id?: number;
  trial_end?: string;
  end?: string;
}
