import * as Router from '@koa/router';
import * as Joi from 'joi';
import type { DddContext } from '../../../libs/ddd';
import { AuthService } from '../../../services/auth/application/service';

const bodySchema = Joi.object<{ code: string }>({
  code: Joi.string().required(),
}).required();

const router = new Router();

router.post('/auth/google', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };
  const { code } = await bodySchema.validateAsync(ctx.request.body);

  const authService = context.get(AuthService);
  const data = await authService.signInGoogle({ code });

  ctx.body = { data };
});

export default router;
