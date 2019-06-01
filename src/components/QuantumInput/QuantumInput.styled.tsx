import styled from 'styled-components';

export const QuantumInputStyled = styled.input`
  outline-color: transparent;
  min-width: 200px;
  width: 100%;
  
  &:read-only {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
  }
`;