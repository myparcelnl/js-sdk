export type LocationParameters = {
  cc: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  postal_code: string;
  number: string;
};

export interface MyParcelLocation {
  street: string;
  city: string;
}
