import styled from 'styled-components';

export const MainStyled = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight - 116}px;
  overflow-x: hidden;
  top: 0;
  width: ${window.innerWidth}px;
  
  .content {
    max-width: 860px;
    width: 100%;
    
      h1 {
        background-color: #484848;
        margin: 0;
        padding: 24px 8px;
        position: sticky;
        top: 0px;
      }
     
       h1 li {
        font-size: 2rem;
        font-weight: bold;
      }
    
      ul {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      pre {
        padding: 8px;
        font-size: 0.75rem;
      }
  }
`;