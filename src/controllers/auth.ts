import { Context } from 'koa';

import { authenticate } from '~/services';

class AuthController {
  public async create(ctx: Context): Promise<void> {
    const { credential, password } = ctx.request.body;

    const { user } = await authenticate.execute({
      credential,
      password,
    });

    ctx.body = {
      user,
    };
  }
}

export default AuthController;
