import React, {FC, MouseEventHandler} from "react";
import {NavStyled} from "./Nav.styled";

export interface NavProps {
  cta: JSX.Element,
  ctaOnclick: MouseEventHandler,
  leftButton: JSX.Element,
  rightButton: JSX.Element
}

export const Nav: FC<NavProps> = ({leftButton, cta, ctaOnclick, rightButton}) => (
  <NavStyled>
    <div>
      {leftButton}
    </div>
    <button className="cta" onClick={ctaOnclick}>
      {cta}
    </button>
    <div>
      {rightButton}
    </div>
  </NavStyled>
);