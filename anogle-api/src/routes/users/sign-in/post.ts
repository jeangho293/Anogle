import * as Router from '@koa/router';

const router = new Router();

router.post('/users/sign-in', async (ctx) => {
  ctx.body = { data: 'hi' };
});

export default router;
