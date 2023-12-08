/* eslint-disable @typescript-eslint/naming-convention */
export enum SystemMessageType {
  SHIPMENT_FORM = 1,
  DASHBOARD = 2,
  GLOBAL_MESSAGE = 3,
  COLLECTION_TRIP_MESSAGE = 4,
  CASES_OVERVIEW = 5,
}

export enum SystemNotificationType {
  ALERT = 'alert',
  WARNING = 'warning',
  SUCCESS = 'success',
  INFO = 'info',
  DEFAULT = 'info',
}

export interface MyParcelSystemMessage {
  id: number;
  content: string;
  active: boolean;
  additional_filter: string;
  message_type: 1 | 2 | 3 | 4 | 5;
  create: Date;
  modified: Date;
  start_date: Date;
  end_date: Date;
  notification_type: 'alert' | 'warning' | 'success' | 'info' | 'info';
  content_nl: string;
  content_en: string;
  content_fr: string;
  platform_ids: number[];
  platform_id: number;
  system_message_id: number;
}
