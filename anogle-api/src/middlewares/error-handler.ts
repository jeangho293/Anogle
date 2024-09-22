/* eslint-disable no-console */
import type { Context } from 'koa';
import { isBoom } from '@hapi/boom';

const convertErrorForm = (error: any) => {
  const errorObject = {
    statusCode: 500,
    message: 'An unexpected error occurred on the server.',
    stack: '',
  };

  if (isBoom(error)) {
    const { statusCode, message } = error.output.payload;
    errorObject.statusCode = statusCode;
    errorObject.message = message;
    errorObject.stack = error.stack || '';
  }

  return errorObject;
};

export const errorHandlerMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    const { statusCode, message } = convertErrorForm(error);

    ctx.status = statusCode;
    ctx.body = { errorMessage: message };
  }
};
