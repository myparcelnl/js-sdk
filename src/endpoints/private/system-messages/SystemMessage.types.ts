/* eslint-disable @typescript-eslint/naming-convention */
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
