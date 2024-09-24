import * as Router from '@koa/router';
import * as Joi from 'joi';
import type { DddContext } from '../../../../../libs/ddd';
import type { User } from '../../../../../services/user/domain/model';
import { ActivityService } from '../../../../../services/activity/application/service';

const router = new Router();

const paramsSchema = Joi.object<{ userId: string; activityId: string }>({
  userId: Joi.string().required(),
  activityId: Joi.string().required(),
});

router.patch('/users/:userId/activities/:activityId', async (ctx) => {
  const { context, user } = ctx.state as { context: DddContext; user: User };

  const { activityId } = await paramsSchema.validateAsync(ctx.params);

  const activityService = context.get(ActivityService);

  await activityService.run;
  ctx.body = {};
});

export default router;
