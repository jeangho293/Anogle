import * as Router from '@koa/router';
import * as Joi from 'joi';
import type { DddContext } from '../../../libs/ddd';
import { UserService } from '../../../services/user/application/service';

const router = new Router();

const bodySchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required();

router.post('/users/sign-in', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };
  const { value } = bodySchema.validate(ctx.request.body) as {
    value: { username: string; password: string };
  };
  const userService = context.get(UserService);

  const data = await userService.signIn({ ...value });
  ctx.body = { data };
});

export default router;
