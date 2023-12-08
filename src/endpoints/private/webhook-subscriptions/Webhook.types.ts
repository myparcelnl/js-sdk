/* eslint-disable @typescript-eslint/naming-convention */
export type WebhookSubscriptionParameters = {
  account_id?: number;
  shop_id?: number;
  hook?: string;
  ids?: string;
};

export interface MyParcelWebhook {
  account_id: number;
  hook: 'shipment_label_created' | 'shipment_status_change';
  id: number;
  shop_id: number;
  url: string;
}
