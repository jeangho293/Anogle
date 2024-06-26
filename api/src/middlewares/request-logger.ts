import type { Context, Next } from 'koa';
import { logger } from '../libs';

function parseContext(ctx: Context) {
  const { txId } = ctx.state;

  return { txId };
}

export const requestLoggerMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next();
  } finally {
    // TODO: 어떤 정보를 가져갈지 좀 더 자세히.
    logger.info('hi', parseContext(ctx));
  }
};
