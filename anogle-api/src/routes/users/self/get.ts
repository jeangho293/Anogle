import * as Router from '@koa/router';
import type { User } from '../../../services/user/domain/model';

const router = new Router();

router.get('/users/self', async (ctx) => {
  const {
    user: { username, email },
  } = ctx.state as { user: User };

  ctx.body = {
    data: {
      username,
      email,
    },
  };
});

export default router;
