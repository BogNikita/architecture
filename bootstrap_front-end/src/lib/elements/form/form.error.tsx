import styled from 'styled-components';
import {FormErrorPropsType} from './form.type'
 
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { text } from 'src/lib/common/text';

export const FormError = (props: FormErrorPropsType) => {
  const {errotTid, errotTvalue} = props
  return (
    <Error>{text(errotTid, errotTvalue)}</Error>
  )
}

const Error = styled.div`
  color: ${THEME_COLOR.PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
  padding: ${spacing(3)};
  background: ${THEME_COLOR.ERROR}
`;
