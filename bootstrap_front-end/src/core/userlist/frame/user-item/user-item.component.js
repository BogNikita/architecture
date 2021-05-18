import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/elements/text';
import { THEME_COLOR, spacing } from '../../../../lib/theme';

export function UserItemComponent({ id, login }) {
  return (
    <Container>
        <UserItem>
          <TextSecondary tid="USER.USER.ID" value={{ID: id}}/>
          <TextBlack tid={login}/>
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

const TextBlack = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT_BLACK};
  display: block;
  margin-top: ${spacing(1)}
`;
