import React, {FC} from "react";
import {Nav, Main} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers} from "../utils";

interface RandomizerProps {
  category: Category,
  sectionHandlers: SectionHandlers
}

export const Randomizer: FC<RandomizerProps> = ({category, sectionHandlers}) => {

  return (
    <>
      <Main>
        <h1>{category.label}</h1>
        <ul>
          {!!Object.keys(category.items).length && Object.values(category.items).map(({id, label}: Item) => (
            <li id={id} key={id}>
              {label}
            </li>
          ))}
        </ul>
        <button onClick={() => sectionHandlers.goToSettings()}>GO TO SETTINGS</button>
      </Main>
      <Nav/>
    </>
  );
};

