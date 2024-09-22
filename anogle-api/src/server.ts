import 'reflect-metadata';
import * as Koa from 'koa';
import * as gracefulShutdown from 'http-graceful-shutdown';
import { docs } from './configs';
import { datasource } from './databases/mysql';

(async () => {
  await datasource.initialize();

  const app = new Koa();
  const server = app.listen(docs.server.port, () => {
    console.log(`Server is running on ${docs.server.port}.😘`);
  });

  gracefulShutdown(server, {
    onShutdown: async () => {
      await datasource.destroy();
    },
    finally: () => {
      console.log('bye👋');
      process.exit();
    },
  });
})();
