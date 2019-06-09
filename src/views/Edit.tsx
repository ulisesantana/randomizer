import React, {ChangeEvent, FC} from "react";
import {Main, Nav, QuantumInput} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers} from "../utils";
import {CategoriesActions, CategoriesPayload} from "../state";

interface EditProps {
  category: Category,
  dispatch: Function,
  sectionHandlers: SectionHandlers
}

const handlerCreator = (action: CategoriesActions, dispatch: Function) =>
  (payload: CategoriesPayload) =>
    ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: action,
        payload: {...payload, label: value}
      })
    };

export const Edit: FC<EditProps> = ({category, dispatch, sectionHandlers}) => {
  const categoryHandler = handlerCreator(CategoriesActions.UPDATE_CATEGORY, dispatch)(category);
  const itemHandler = handlerCreator(CategoriesActions.UPDATE_ITEM, dispatch);

  return (
    <>
      <Main>
        <h1>
          <QuantumInput value={category.label} onChange={categoryHandler}/>
        </h1>
        <ul>
          {!!Object.keys(category.items).length &&
            Object.values(category.items).map(({id, label}: Item) => (
            <li id={id} key={id + category.id}>
              <QuantumInput
                value={label}
                onChange={itemHandler({categoryId: category.id, id})}
              />
            </li>
          ))}
        </ul>
        <button onClick={() => sectionHandlers.goToSettings()}>GO TO SETTINGS</button>
        <button onClick={() => sectionHandlers.goToRandomize()}>GO TO RANDOM</button>
      </Main>
      <Nav
        leftButton={<button onClick={() => sectionHandlers.goToRandomize()}>GO TO RANDOM</button>}
        cta={<span>ADD</span>}
        rightButton={<button onClick={() => sectionHandlers.goToSettings()}>GO TO SETTINGS</button>}
      />
    </>
  );
};

