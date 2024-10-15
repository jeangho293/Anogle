import * as Router from '@koa/router';
import * as Joi from 'joi';
import type { DddContext } from '../../../libs/ddd';
import { AuthService } from '../../../services/auth/application/service';

const bodySchema = Joi.object<{ code: string }>({
  code: Joi.string().required(),
}).required();

const router = new Router();

router.post('/auth/kakao', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };

  const authService = context.get(AuthService);
  const { code } = await bodySchema.validateAsync(ctx.request.body);

  const data = await authService.signInKakao({ code });

  ctx.body = { data };
});

export default router;
