import { Service } from '@/models';

export type AppointmentModel = {
  id: string;
  service_id: string;
  service: Service;
  user_id: string;
  date: string;
  created_at: string;
  updated_at: string;
};
