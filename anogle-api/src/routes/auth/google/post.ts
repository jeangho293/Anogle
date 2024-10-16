import * as Router from '@koa/router';
import type { DddContext } from '../../../libs/ddd';
import { AuthService } from '../../../services/auth/application/service';

const router = new Router();

router.post('/auth/google', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };
  const { accessToken } = ctx.request.body as { accessToken: string };

  const authService = context.get(AuthService);

  await authService.signInGoogle({ accessToken });
  ctx.body = { data: { token: '1234' } };
});

export default router;
