import { setActivePath } from '../../lib/common/navigation';

import { USERLIST_ROUTER_PATH } from './userlist.constants';

export async function userlistRouter(ctx) {
  ctx.store.dispatch(setActivePath(USERLIST_ROUTER_PATH));
}
