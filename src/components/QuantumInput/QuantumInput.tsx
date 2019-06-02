import React, {ChangeEventHandler, FC, useState} from "react";
import {QuantumInputStyled} from "./QuantumInput.styled";

interface QuantumInputProps {
  value: string,
  onChange: ChangeEventHandler
}

export const QuantumInput: FC<QuantumInputProps> = ({value, onChange}) => {
  const [editable, setEditable] = useState(false);
  const editableHandler = (isEditable: boolean) => () => {
    setEditable(isEditable);
  };

  const onFocus = editableHandler(true);
  const onFocusOut = editableHandler(false);

  return (
    <QuantumInputStyled
      readOnly={!editable}
      value={value}
      onFocus={onFocus}
      onBlur={onFocusOut}
      onChange={onChange}
    />
  );
};