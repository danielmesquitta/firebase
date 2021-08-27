import Router from '@koa/router';

import { AuthController, UserController } from '~/controllers';
import { authValidator } from '~/validators';

const authController = new AuthController();
const userController = new UserController();

const router = new Router();

router
  /**
   * Auth
   */
  .post('/authenticate', authValidator.create, authController.create)

  /**
   * Users
   */
  .get('/users/:id', userController.show)
  .get('/users', userController.index);

export default router;
