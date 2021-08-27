import { Context, Next } from 'koa';

const isAuthenticated = async (ctx: Context, next: Next): Promise<void> => {
  await next();
};

export default isAuthenticated;
