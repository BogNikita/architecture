import { UserItemPrimary } from '../../../../lib/elements/useritem';

export function UserItemComponent({userItem}) {
  return userItem?.map((user, i) => (
    <UserItemPrimary key={`${user.id}_${i}`} id={user.id} login={user.login} />
  ));
}
