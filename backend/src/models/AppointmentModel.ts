import { ServiceModel } from '@/models';

export type AppointmentModel = {
  id: string;
  service_id: string;
  service: ServiceModel;
  user_id: string;
  date: string;
  created_at: string;
  updated_at: string;
};
