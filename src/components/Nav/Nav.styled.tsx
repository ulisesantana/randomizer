import styled from 'styled-components';
import {theme} from '../../jss.config';
const ctaSize = '96px';
export const NavStyled = styled.nav`
  align-items: center;
  background-color: ${theme.primaryColor};
  border-radius: 100% 100% 0 0;
  bottom: 0;
  display: flex;
  height: 100px;

  .cta {
    background-color: ${theme.secondaryColor};
    border-radius: 100%;
    border: solid 4px white;
    cursor: pointer;
    height: ${ctaSize};
    outline: none;
    width: ${ctaSize};
  }
  
  & > div {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: ${window.innerWidth/3}px;
  }


  
`;