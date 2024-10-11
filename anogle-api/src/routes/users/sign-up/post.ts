import * as Router from '@koa/router';
import type { DddContext } from '../../../libs/ddd';
import type { User } from '../../../services/user/domain/model';
import { UserService } from '../../../services/user/application/service';

const router = new Router();

router.post('/users/sign-up', async (ctx) => {
  const { context, user } = ctx.state as { context: DddContext; user: User };

  const { email, password, confirmPassword } = ctx.request.body as {
    email: string;
    password: string;
    confirmPassword: string;
  };

  const userService = context.get(UserService);

  await userService.signUp({ email, username: 'theo', password, confirmPassword });

  ctx.status = 201;
  ctx.body = {};
});

export default router;
