import { DataSource } from 'typeorm';
import { configs } from '../../configs';

export const datasource = new DataSource(configs.mysql);
