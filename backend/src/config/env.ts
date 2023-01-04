const env = {
  UsersTableName: process.env.USERS_TABLE,
  CompanyTableName: process.env.COMPANY_TABLE,
  ServiceTableName: process.env.SERVICE_TABLE,
  ScheduleTableName: process.env.SCHEDULE_TABLE,
  AppointmentTableName: process.env.APPOINTMENT_TABLE,
  JwtSecret: process.env.JWT_SECRET,
};

export default env;
