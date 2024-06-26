import * as Router from '@koa/router';
import koaBody from 'koa-body';

export const globalRouter = new Router();

globalRouter.use(koaBody());

globalRouter.get('/ping', (ctx) => {
  ctx.body = 'pong';
});
