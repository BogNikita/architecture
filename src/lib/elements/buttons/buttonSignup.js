import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../theme';

export const Button = styled.button`
  color: ${THEME_COLOR.PRIMARY};
  border-radius: 5px;
  padding: ${spacing(3)};
`;
