import React, {ChangeEvent, FC} from "react";
import {Nav, Main, QuantumInput} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers} from "../utils";
import {CategoriesActions} from "../state";

interface EditProps {
  category: Category,
  dispatch: Function,
  sectionHandlers: SectionHandlers
}

export const Edit: FC<EditProps> = ({category, dispatch, sectionHandlers}) => {
  const onChangeHandler = (categoryId: string, id: string) =>
    ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: CategoriesActions.UPDATE_ITEM,
        payload: {categoryId, id, label: value}
      })
    };

  return (
    <>
      <Main>
        <h1>{category.label}</h1>
        <ul>
          {!!Object.keys(category.items).length && Object.values(category.items).map(({id, label}: Item) => (
            <li id={id} key={id + category.id}>
              <QuantumInput
                value={label}
                onChange={onChangeHandler(category.id, id)}
              />
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

