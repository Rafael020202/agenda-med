export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  document: string;
  is_provider?: boolean;
  city?: string;
  state_abbr?: string;
  address?: string;
  district?: string;
  number?: number;
  postcode?: string;
  latitude?: number;
  longitude?: number;
  created_at: string;
  updated_at: string;
};
