import 'reflect-metadata';
import * as express from 'express';
import * as gracefulShutdown from 'http-graceful-shutdown';
import {
  dependencyInjectorHandler,
  uuidHandler,
  requestLoggerHandler,
  errorLoggerHandler,
} from '@middlewares';
import * as cors from 'cors';
import { eventStore } from '@libs/event-store';
import * as multer from 'multer';
import { globalRouter } from './routes';
import { initDatasource } from './databases';

(async () => {
  // NOTE: Mysql connect
  await initDatasource();

  const app = express();

  app.use(uuidHandler);
  app.use(dependencyInjectorHandler);
  app.use(requestLoggerHandler);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(multer().single('file'));
  app.use(cors());

  app.use(globalRouter);
  app.use(errorLoggerHandler);

  const server = app.listen(3000, async () => {
    await eventStore.start();
    console.log(`Server is running on 3000. 😏`);
  });

  gracefulShutdown(server, {
    finally: () => {
      console.log(`bye!👋`);
    },
  });
})();
