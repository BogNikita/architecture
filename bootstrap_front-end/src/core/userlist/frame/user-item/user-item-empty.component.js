import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/elements/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function UserItemEmptyComponent() {
  return <EmptyList tid="USER.USER.EMPTYLIST" />;
}

const EmptyList = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
