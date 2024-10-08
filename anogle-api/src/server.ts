/* eslint-disable no-console */
import 'reflect-metadata';
import * as Koa from 'koa';
import * as gracefulShutdown from 'http-graceful-shutdown';
import * as koaBody from 'koa-bodyparser';
import * as cors from '@koa/cors';
import { docs } from './configs';
import { datasource } from './databases/mysql';
import { globalRouter } from './routes';
import {
  dependencyInjectorMiddleware,
  errorHandlerMiddleware,
  uuidMiddleware,
} from './middlewares';

(async () => {
  // database setting
  await datasource.initialize();

  // server
  const app = new Koa();

  app.use(uuidMiddleware);
  app.use(errorHandlerMiddleware);
  app.use(dependencyInjectorMiddleware);

  app.use(koaBody());
  app.use(cors());
  app.use(globalRouter.middleware());

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
