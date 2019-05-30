import styled from 'styled-components';
import {theme} from '../../jss.config';

export const NavStyled = styled.nav`
  align-items: center;
  background-color: ${theme.primaryColor};
  border-radius: 100% 100% 0 0;
  bottom: 0;
  display: flex;
  height: 100px;
  justify-content: space-between;
  left: 0;
  position: absolute;
  width: 100%;

  .cta {
    background-color: ${theme.secondaryColor};
    border-radius: 100%;
    content: "";
    display: block;
    height: 100px;
    width: 100px
  }


  
`;