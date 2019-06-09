import styled from 'styled-components';

export const QuantumInputStyled = styled.input`
  font-size: 1rem;
  outline-color: transparent;
  
  &:read-only {
    align-self: center;
    background-color: transparent;
    border: none;
    color: white;
  }
`;