import styled from 'styled-components';
import { TextSecondary } from '../../../lib/elements/text';
import { THEME_COLOR, spacing } from '../../../lib/theme';
import { TextPrimary } from '../text/text.primary';
import { UserItemPropsType}  from './useritem.type'

export function UserItemPrimary(props : UserItemPropsType) {
    const {id, login} = props;
  return (
    <Container>
        <UserItem>
          <TextSecondary tid="USER.USER.ID" value={{ID: id}}/>
          <TextUserItem tid={login}/>
        </UserItem>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(4)};
`;

const UserItem = styled.div`
  border-bottom: ${spacing(0.25)} solid ${THEME_COLOR.BORDER.COLOR.PRIMARY};
  padding: ${spacing(2)} 0
`;

const TextUserItem = styled(TextPrimary)`
  display: block;
  margin-top: ${spacing(1)}
`;