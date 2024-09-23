import { createLogger, format, transports } from 'winston';
import type { Context } from 'koa';

const MESSAGE = Symbol.for('message');

function koaFormat(info: { level: string; message: any; ctx?: Context }) {
  const { level, message } = info;
  const field = {
    level,
    message,
  };

  // TODO: 적당히 생각날때 커스텀하자구. 근데 이건 elastic 추가하면 사용할 것..

  Object.assign(info, { [MESSAGE]: JSON.stringify(field) });

  return info;
}

const koaConsole = format(koaFormat);

export const logger = createLogger({
  transports: [
    new transports.Console({
      format: koaConsole(),
    }),
  ],
});

export function createContextLog(ctx: Context) {
  return {
    txId: ctx.state.txId,
  };
}
