export interface SystemCountryCode {
  label: string;
  region: string;
}

export type SystemCountryCodesPerCountry = Record<string, SystemCountryCode>[];
