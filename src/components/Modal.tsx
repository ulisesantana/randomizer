import React, {FC, MouseEventHandler} from "react";
import styled from 'styled-components'

const ModalStyled = styled.div<{ open: boolean }>`
  align-items: center;
  background-color: rgba(255,255,255,0.6);
  display: ${({open}) => open ? 'flex' : 'none'};
  height: ${window.innerHeight}px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: ${window.innerWidth}px;
  z-index: 10;
  
  dialog {
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 16px;
    color: black;
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    justify-content: space-between;
    max-width: 860px;
    min-height: ${Math.round(window.innerHeight/4)}px;;
    padding: 32px 16px;
    width: 80%;
  }
`;

export interface ModalProps {
  open: boolean,
  onFocusOut?: MouseEventHandler
}

export const Modal: FC<ModalProps> =
  ({children, open, onFocusOut}) => {
    const onBlurHandler: MouseEventHandler = (e) => {
      e.preventDefault();
      !!onFocusOut && onFocusOut(e)
    };

    return (
      <ModalStyled open={open} onClick={onBlurHandler}>
        <dialog open={open}>
          {children}
        </dialog>
      </ModalStyled>
    );
  };