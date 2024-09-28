import * as Router from '@koa/router';
import * as Joi from 'joi';
import type { DddContext } from '../../../libs/ddd';
import { UserService } from '../../../services/user/application/service';

const router = new Router();

const bodySchema = Joi.object<{ email: string; password: string }>({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required();

router.post('/users/sign-in', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };
  const value = await bodySchema.validateAsync(ctx.request.body);
  const userService = context.get(UserService);

  const data = await userService.signIn({ ...value });
  ctx.body = { data };
});

export default router;
