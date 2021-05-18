import styled from 'styled-components';
import {ButtonPrimaryPropsType} from './button.type'
 
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { text } from 'src/lib/common/text';

export const ButtonPrimary = (props: ButtonPrimaryPropsType) => {
  const {tId, tValue} = props
  return (
    <Button>{text(tId, tValue)}</Button>
  )
}



const Button = styled.button`
  color: ${THEME_COLOR.PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
  padding: ${spacing(3)};
  background: ${THEME_COLOR.BACKGROUND.BUTTON.PRIMARY}
`;
