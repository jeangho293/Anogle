import type { DataSourceOptions } from 'typeorm';

const database = process.env.MYSQL_DATABASE;
if (!database) {
  throw new Error('mysql database is not defined.');
}

const username = process.env.MYSQL_USERNAME;
if (!username) {
  throw new Error('mysql username is not defined.');
}

const password = process.env.MYSQL_PASSWORD;
if (!password) {
  throw new Error('mysql password is not defined.');
}

const config = {
  type: 'mysql',
  database,
  username,
  password,
  port: 3306,
  logging: false,
  synchronize: true,
} as DataSourceOptions;

export default config;
