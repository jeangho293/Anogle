import * as Router from '@koa/router';
import authRoutes from './auth';
import usersRoutes from './users';
import jobsRoutes from './jobs';

export const globalRouter = new Router();

globalRouter.get('/ping', (ctx) => {
  ctx.body = 'pong';
});

globalRouter.use(
  ...authRoutes.map((router) => router.routes()),
  ...usersRoutes.map((router) => router.routes()),
  ...jobsRoutes.map((router) => router.routes())
);
