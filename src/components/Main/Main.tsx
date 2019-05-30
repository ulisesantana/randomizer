import React from "react";
import {MainStyled} from "./Main.styled";


export const Main = ({children}: {children: JSX.Element[]}) => (
  <MainStyled>
    {children}
  </MainStyled>
);