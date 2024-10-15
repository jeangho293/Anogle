import * as Router from '@koa/router';

const router = new Router();

router.post('/auth/kakao', async (ctx) => {
  const a = ctx.request.URL;

  ctx.body = { data: { token: 'hi' } };
});

export default router;
