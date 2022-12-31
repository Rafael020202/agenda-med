const env = {
  UsersTableName: process.env.USERS_TABLE,
  ScheduleTableName: process.env.SCHEDULE_TABLE,
  AppointmentTableName: process.env.APPOINTMENT_TABLE,
  JwtSecret: process.env.JWT_SECRET,
};

export default env;
