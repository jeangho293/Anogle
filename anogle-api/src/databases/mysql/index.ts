import { DataSource } from 'typeorm';
import { Token, Container } from 'typedi';
import { docs } from '../../configs';
import entities from './entities';
import { TransactionManager } from '../../libs/ddd/transaction-manager';
import { TypeOrmTransactionManager } from '../../libs/typeorm';

export const dataSourceMap = new Token<Record<string, DataSource>>('@dataSources');

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

Container.set({
  id: dataSourceMap,
  value: { default: datasource },
  global: true,
});

Container.set({
  // @ts-expect-error 일단 무시.
  id: TransactionManager,
  type: TypeOrmTransactionManager,
});
