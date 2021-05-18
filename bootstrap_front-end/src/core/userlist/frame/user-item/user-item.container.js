import { UserItemComponent } from './user-item.component';

export function UserItemContainer(props) {
  const { id, login } = props;

  return <UserItemComponent id={id} login={login} />;
}
