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
      </Main>
      <Nav
        leftButton={<button onClick={() => sectionHandlers.goToEdit()}>GO TO EDIT</button>}
        cta={<span>RANDOM</span>}
        rightButton={<button onClick={() => sectionHandlers.goToList()}>GO TO LIST</button>}
      />
    </>
  );
};

