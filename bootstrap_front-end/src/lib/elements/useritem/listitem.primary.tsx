import styled from 'styled-components';
import { TextSecondary } from '../text';
import { THEME_COLOR, spacing } from '../../theme';
import { TextPrimary } from '../text/text.primary';
import { UserItemPropsType}  from './listitem.type'

export function ListItemPrimary(props : UserItemPropsType) {
    const { title, titleValue, ...arg} = props;
    const TextField = Object.values(arg).map((item, i) => <TextListItem key={`${item}_${i}`} tid={item}/>)

    return (
    <Container>
        <ListItem>
          <TextSecondary tid={title} value={titleValue}/>
          {TextField}
        </ListItem>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: ${spacing(4)};
`;

const ListItem = styled.div`
  border-bottom: ${spacing(0.25)} solid ${THEME_COLOR.BORDER.COLOR.PRIMARY};
  padding: ${spacing(2)} 0
`;

const TextListItem = styled(TextPrimary)`
  display: block;
  margin-top: ${spacing(1)}
`;