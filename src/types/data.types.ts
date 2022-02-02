export type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type IntBoolean = 0 | 1;

export interface Price {
  amount: number;
  currency: 'EUR' | string;
}

export interface StartEndDate {
  end: Timestamp;
  start: Timestamp;
}

export interface EnumSchema<Type> {
  enum: Type[];
  type: Type extends boolean ? 'boolean' : string;
}

export interface Timestamp {
  date: string;
  timezone: string;
  timezone_type: number;
}

export type PaginationParameters = {
  page: number;
  size: number;
};
