import { DataSource } from 'typeorm';
import { docs } from '../../configs';
import entities from './entities';

const { username, password, database } = docs.mysql;

export const datasource = new DataSource({
  type: 'mysql',
  port: 3306,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  entities,
});
