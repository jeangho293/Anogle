/* eslint-disable no-console */
import type { Context } from 'koa';
import { isBoom } from '@hapi/boom';
import { ValidationError } from 'joi';
import { logger } from '../libs/logger';

const convertErrorForm = (error: any) => {
  const errorObject = {
    statusCode: 500,
    message: {
      client: 'An unexpected error occurred on the server.',
      server: 'An unexpected error occurred on the server.',
    },
    stack: '',
  };

  if (isBoom(error)) {
    const { statusCode, message } = error.output.payload;
    errorObject.statusCode = statusCode;
    errorObject.message.client = message;
    errorObject.stack = error.stack || '';
  }

  if (error instanceof ValidationError) {
    const { message } = error;
    errorObject.message.server = message;
    errorObject.stack = error.stack || '';
  }

  return errorObject;
};

export const errorHandlerMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    const { statusCode, message } = convertErrorForm(error);

    if (process.env.NODE_ENV !== 'production') {
      console.log(error);
    } else {
      logger.error(message.server);
    }

    ctx.status = statusCode;
    ctx.body = { errorMessage: message.client };
  }
};
