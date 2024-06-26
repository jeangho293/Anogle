import mysql from './mysql';

export const configs = {
  isDev: process.env.NODE_ENV !== 'production',
  mysql,
  server: {
    port: process.env.PORT || 3000,
  },
};
