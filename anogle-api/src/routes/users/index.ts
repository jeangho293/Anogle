import * as Router from '@koa/router';
import userIdRouter from './_userId';
import signInRouter from './sign-in';
import { authMiddleware } from '../../middlewares/auth';

const publicUsersRouter = new Router();
const privateUsersRouter = new Router();

// NOTE: need to auth.
privateUsersRouter.use(authMiddleware).use(...userIdRouter.map((router) => router.routes()));

// NOTE: not need to auth.
publicUsersRouter.use(...signInRouter.map((router) => router.routes()));

export default [publicUsersRouter, privateUsersRouter];
