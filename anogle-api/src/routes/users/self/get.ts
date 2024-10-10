import * as Router from '@koa/router';
import type { User } from '../../../services/user/domain/model';

const router = new Router();

router.get('/users/self', async (ctx) => {
  const { user } = ctx.state as { user: User };

  ctx.body = { data: user };
});

export default router;
