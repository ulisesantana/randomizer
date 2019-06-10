import React, {ChangeEventHandler, FC} from "react";
import {QuantumInputStyled} from "./QuantumInput.styled";
import {Trash} from 'styled-icons/boxicons-regular/Trash';

interface QuantumInputProps {
  value: string,
  onChange: ChangeEventHandler
  onDelete: () => void
}

export const Input: FC<QuantumInputProps> = ({value, onChange, onDelete}) => {

  return (
    <QuantumInputStyled>
      <textarea
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>
        <Trash size={32}/>
      </button>
    </QuantumInputStyled>
  );
};