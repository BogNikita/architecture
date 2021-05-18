import styled from 'styled-components';
 
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';



export const FormLoader = styled.div`
display: block;
width: ${spacing(20)};
height: ${spacing(20)};
margin: 0 auto;

:after {
    content: " ";
    display: block;
    width: ${spacing(16)};
    height: ${spacing(16)};
    margin: ${spacing(2)};
    border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
    border: ${spacing(1.5)} solid ${THEME_COLOR.ERROR};
    border-color: ${THEME_COLOR.ERROR} transparent ${THEME_COLOR.ERROR} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
`;
