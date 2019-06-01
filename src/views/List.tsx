import React, {FC} from "react";
import {Nav, Main} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers} from "../utils";

interface ListProps {
  categories: Category[],
  sectionHandlers: SectionHandlers
}

export const List: FC<ListProps> = ({categories, sectionHandlers}) => {

  return (
    <>
      <Main>
        <ul>
          {!!categories.length && categories.map(({id, label}: Item) => (
            <li id={id} key={id}>
              {label}
            </li>
          ))}
        </ul>
        <button onClick={() => sectionHandlers.goToSettings()}>GO TO SETTINGS</button>
        <button onClick={() => sectionHandlers.goToRandomize()}>GO TO RANDOM</button>
      </Main>
      <Nav/>
    </>
  );
};

