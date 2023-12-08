/* eslint-disable @typescript-eslint/naming-convention */
export interface MyParcelApiKey {
  id: number;
  account_id: number;
  shop_id: number;
  status: number;
  username: string;
  key: string;
}

export interface ApiKeyPostData {
  account_id: number;
  shop_id: number;
}
