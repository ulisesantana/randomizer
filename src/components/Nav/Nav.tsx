import React, {FC} from "react";
import {NavStyled} from "./Nav.styled";

export interface NavProps {
  leftButton: JSX.Element,
  cta: JSX.Element,
  rightButton: JSX.Element
}

export const Nav: FC<NavProps> = ({leftButton, cta, rightButton}) => (
  <NavStyled>
    <div>
      {leftButton}
    </div>
    <button className="cta">
      {cta}
    </button>
    <div>
      {rightButton}
    </div>
  </NavStyled>
);