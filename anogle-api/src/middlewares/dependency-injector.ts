import type { Context } from 'koa';
import { DddContext } from '../libs/ddd/context';

export const dependencyInjectorMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  const { txId } = ctx.state as { txId: string };
  let context;

  try {
    context = DddContext.of(txId);
    ctx.state.context = context;

    await next();
  } finally {
    context?.dispose();
  }
};
