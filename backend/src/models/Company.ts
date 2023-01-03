import { Service } from '@/models';

export type Company = {
  id: string;
  name: string;
  city: string;
  state_abbr: string;
  address: string;
  postcode: string;
  latitude: number;
  services: Service[];
  longitude: number;
  provider_id: string;
  created_at: string;
  updated_at: string;
};
