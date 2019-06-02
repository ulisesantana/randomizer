import styled from 'styled-components';

export const QuantumInputStyled = styled.input`
  box-sizing: border-box;
  font-size: 1rem;
  outline-color: transparent;
  width: 100%;
  
  &:read-only {
    align-self: center;
    background-color: transparent;
    border: none;
    color: white;
  }
`;