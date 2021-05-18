import React from 'react';
import { FormLoader } from '../../lib/elements/form';
import { UserItemContainer } from './frame/user-item';
import styled from 'styled-components';
import { TextSecondary } from '../../lib/elements/text';
import { THEME_SIZE } from '../../lib/theme';

export function UserlistComponent(props) {
  const { state, pageLoading } = props;

  const UserList = () => {
    if (state?.data.length) {
      return state.data.map((user, i) => (
        <UserItemContainer
          key={`${user.id}_${i}`}
          id={user.id}
          login={user.login}
        />
      ));
    } else {
      return <EmptyList tid="USER.USER.EMPTYLIST" />;
    }
  };

  const { pending } = state.userlistStatus;
  return <>{pageLoading || pending ? <FormLoader /> : UserList()}</>;
}

const EmptyList = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
