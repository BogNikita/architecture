import { setActivePath } from '../../lib/common/navigation';
import { authRedirectLogged } from '../../lib/common/auth';

import {
  SIGNUP_ROUTER_PATH,
  SIGNUP_REDIRECT_ON_LOGGED,
} from './signup.constants';

export async function signupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTER_PATH));
  // authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED);
}
