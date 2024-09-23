import * as Router from '@koa/router';
import type { DddContext } from '../../../libs/ddd';
import { ActivityService } from '../../../services/activity/application/service';

const router = new Router();

router.post('/jobs/activities', async (ctx) => {
  const { context } = ctx.state as { context: DddContext };

  const activityService = context.get(ActivityService);

  await activityService.run();

  ctx.status = 201;
  ctx.body = {};
});

export default router;
