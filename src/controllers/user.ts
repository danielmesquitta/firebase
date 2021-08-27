import { Context } from 'koa';

import { listUsers, showUserById } from '~/services';

class UserController {
  public async index(ctx: Context): Promise<void> {
    const users = await listUsers.execute();

    ctx.body = users;
  }

  public async show(ctx: Context): Promise<void> {
    const userId = ctx.params.id;

    const user = await showUserById.execute({ userId });

    ctx.body = user;
  }

  public async create(ctx: Context): Promise<void> {
    const data = ctx.request.body;

    ctx.body = data;
  }

  public async update(ctx: Context): Promise<void> {
    const data = ctx.request.body;

    ctx.body = data;
  }

  public async delete(ctx: Context): Promise<void> {
    const data = ctx.request.body;

    ctx.body = data;
  }
}

export default UserController;
