import styled from 'styled-components';
import {theme} from '../../jss.config';
const ctaSize = '96px';
export const NavStyled = styled.nav`
  align-items: center;
  background-color: ${theme.primaryColor};  
  bottom: 0;
  color: ${theme.textColor};
  display: flex;
  height: 116px;
  justify-content: center;

  .cta {
    background-color: ${theme.secondaryColor};
    border-radius: 100%;
    border: solid 2px white;
    color: inherit;
    cursor: pointer;
    height: ${ctaSize};
    outline: none;
    width: ${ctaSize};
  }
  
  & > div {
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: ${window.innerWidth/3}px;
  }


  
`;