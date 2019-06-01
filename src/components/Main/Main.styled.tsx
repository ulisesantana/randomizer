import styled from 'styled-components';

export const MainStyled = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight - 116}px;
  justify-content: center;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px;
  top: 0;
  width: ${window.innerWidth - 16}px;
  
  ul {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    width: auto;
  }
`;