import type { Context, Next } from 'koa';
import { Boom } from '@hapi/boom';
import { logger } from '../libs';

function transformError(err: any) {
  const customError = {
    message: '',
    statusCode: 500,
    stackTrace: '',
  };

  // NOTE: JOI도 추가..

  if (err instanceof Boom) {
    customError.message = err.message || 'An unexpected error occurred on the server.';
    customError.statusCode = err.output.statusCode;
    customError.stackTrace = err.stack || '';
  }

  return customError;
}

export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    const customError = transformError(err);

    logger.error('bug', customError);
  }
};
