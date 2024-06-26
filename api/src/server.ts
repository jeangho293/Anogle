import 'reflect-metadata';
import * as gracefulShutdown from 'http-graceful-shutdown';
import * as Koa from 'koa';
import { configs } from './configs';
import { datasource } from './libs';
import { globalRouter } from './routes';
import { requestLoggerMiddleware } from './middlewares/request-logger';
import { uuidMiddleware } from './middlewares/uuid-handler';

const { port } = configs.server;

(async () => {
  await datasource.initialize();

  const app = new Koa();

  app.use(uuidMiddleware);
  app.use(requestLoggerMiddleware);

  // -------------- routes --------------
  app.use(globalRouter.routes());
  // ------------------------------------

  const server = app.listen(port);

  // NOTE: grace shutdown
  gracefulShutdown(server, {
    onShutdown: async () => {
      await datasource.destroy();
    },
    finally: () => {
      console.log('bye 🖐️');
      process.exit();
    },
  });

  console.log(`server is running on ${port}`);
})();
