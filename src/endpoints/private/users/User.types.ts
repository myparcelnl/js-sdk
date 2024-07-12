export interface User {
  id: number;
  account_id: number;
  username: string;
  created: string;
  remember_token: string | null;
  all_shop_access: boolean;
  sortPayload: number[];
  contact: Contact;
  roles: Role[];
}

interface Contact {
  id: number;
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  street: string;
  number: string;
  number_suffix: string;
  box_number: string;
  postal_code: string;
  city: string;
  cc: string | null;
  street_additional_info: string;
  region: string;
}

interface Role {
  id: number;
  description: string;
  name: string;
  role_type: string;
}
  