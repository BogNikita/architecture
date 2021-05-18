import styled from 'styled-components';
import { TextSecondaryPropsType } from './text.type';

import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR, spacing } from '../../theme';

const Title = styled.span`
  font-size: ${THEME_SIZE.FONT.TITLE};
  color: ${THEME_COLOR.TEXT_BLACK};
  display: block;
  margin: ${spacing(2.5)} 0
`;

export function TitleSecondary(props: TextSecondaryPropsType) {
  return <Title className={props.className}>{text(props.tid, props.value)}</Title>;
}