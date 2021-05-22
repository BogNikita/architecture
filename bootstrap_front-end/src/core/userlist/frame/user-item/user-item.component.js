import { ListItemPrimary } from '../../../../lib/elements/listitem';
import { USERLIST_DATA_NAME } from '../../userlist.type';

export function UserItemComponent({ userItem }) {
  return userItem?.map((user, i) => (
    <ListItemPrimary
      key={`${user[USERLIST_DATA_NAME.ID]}_${i}`}
      value={user[USERLIST_DATA_NAME.LOGIN]}
      title="USER.USER.ID"
      titleValue={{ ID: user[USERLIST_DATA_NAME.ID] }}
    />
  ));
}
