export type ENV = {
  USERS_TABLE: string;
};

const env = {
  UsersTableName: process.env.USERS_TABLE,
};

export default env;
