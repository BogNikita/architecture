import styled from 'styled-components';

import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR } from '../../theme';

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_SECONDARY};
`;

export function TextSecondary(props) {
  return <Text className={props.className}>{text(props.tid, props.value)}</Text>;
}
