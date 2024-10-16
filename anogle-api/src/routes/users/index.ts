import * as Router from '@koa/router';
import userIdRouter from './_userId';
import selfRouter from './self';
import signInRouter from './sign-in';
import signUpRouter from './sign-up';
import { authMiddleware } from '../../middlewares/auth';

const publicUsersRouter = new Router();
const privateUsersRouter = new Router();

// NOTE: need to auth.
privateUsersRouter
  .use(authMiddleware)
  .use(
    ...userIdRouter.map((router) => router.routes()),
    ...selfRouter.map((router) => router.routes())
  );

// NOTE: not need to auth.
publicUsersRouter.use(
  ...signInRouter.map((router) => router.routes()),
  ...signUpRouter.map((router) => router.routes())
);

export default [publicUsersRouter, privateUsersRouter];
