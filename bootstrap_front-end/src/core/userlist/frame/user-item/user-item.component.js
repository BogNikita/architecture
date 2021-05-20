import { UserItemPrimary } from '../../../../lib/elements/useritem';
import { USERLIST_DATA_NAME } from '../../userlist.type';

export function UserItemComponent({ userItem }) {
  return userItem?.map((user, i) => (
    <UserItemPrimary
      key={`${user[USERLIST_DATA_NAME.ID]}_${i}`}
      value={user[USERLIST_DATA_NAME.LOGIN]}
      tid="USER.USER.ID"
      id={{ ID: user[USERLIST_DATA_NAME.ID] }}
    />
  ));
}
