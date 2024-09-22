import type { Context } from 'koa';
import { v4 as uuid } from 'uuid';

export const uuidMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  ctx.state.txId = ctx.get('x-request-id') || uuid();
  await next();
};
