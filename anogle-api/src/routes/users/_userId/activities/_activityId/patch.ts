import * as Router from '@koa/router';
import * as Joi from 'joi';
import { DddContext } from '../../../../../libs/ddd';

const router = new Router();

const paramsSchema = Joi.object<{ userId: string; activityId: string }>({
  userId: Joi.string().required(),
  activityId: Joi.string().required(),
});

router.patch('/users/:userId/activities/:activityId', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };

  const params = await paramsSchema.validateAsync(ctx.params);
  ctx.body = {};
});

export default router;
