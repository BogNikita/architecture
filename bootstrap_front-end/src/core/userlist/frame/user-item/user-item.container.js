import { UserItemComponent } from './user-item.component';
import { UserItemPrimary } from '../../../../lib/elements/useritem';
import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/elements/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function UserItemContainer(props) {
  const { isPending, isError, isSuccess, userItem, pageLoading, errorMessage } = props;

  const UserList = () => {
    if (userItem?.length) {
      return userItem.map((user, i) => (
        <UserItemPrimary
          key={`${user.id}_${i}`}
          id={user.id}
          login={user.login}
        />
      ));
    } else {
      return <EmptyList tid="USER.USER.EMPTYLIST" />;
    }
  };

  return (
    <UserItemComponent
      userList={UserList}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
    />
  );
}

const EmptyList = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
