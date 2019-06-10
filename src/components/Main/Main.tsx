import React from "react";
import {MainStyled} from "./Main.styled";


export const Main = ({children}: {children: JSX.Element | JSX.Element[]}) => (
  <MainStyled>
    <div className="content">
      {children}
    </div>
  </MainStyled>
);