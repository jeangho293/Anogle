import { Context } from 'koa';
import { verify } from 'jsonwebtoken';
import { unauthorized } from '@hapi/boom';
import { docs } from '../configs';
import { DddContext } from '../libs/ddd';
import { UserRepository } from '../services/user/infrastructure/repository';
import { FilteredUserSpec } from '../services/user/domain/specs';

export const authMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const { authorization } = ctx.header;
  const { context } = ctx.state as { context: DddContext };

  if (!authorization) {
    throw unauthorized(`No authorization.`);
  }

  const [type, accessToken] = authorization.split(' ');

  if (type === 'Bearer' || accessToken) {
    const { userId } = verify(accessToken, docs.jwt.secret) as { userId: number };
    const userRepository = context.get(UserRepository);

    const user = await userRepository.findSatisfyingSpec(new FilteredUserSpec({ id: userId }));
    ctx.state.user = user;
  }

  await next();
};
