import styled from 'styled-components';

export const ItemList = styled.li`
  align-items: center;
  background-color: rgba(255,255,255,0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  min-height: ${Math.round(window.innerHeight/8)}px;
  margin: 8px auto;
  padding: 16px;
  width: calc(100% - 48px);
  
  h2 {
    margin: 0;
  }
  
  small {
    display: block;
    font-size: 1.25rem;
  }
`;