import React, {FC, MouseEventHandler, useState} from "react";
import {Nav, Main, ItemList, AddModalForm} from "../components";
import {Category} from "../types";
import {SectionHandlers} from "../utils";
import {ArrowLeft} from "styled-icons/feather/ArrowLeft";
import {Plus as Add} from "styled-icons/feather/Plus";
import {Settings} from "styled-icons/feather/Settings";
import uuid from "uuid";
import {CategoriesActions, creatorCreator} from "../state";

interface ListProps {
  state: Record<string, Category>,
  dispatch: Function,
  sectionHandlers: SectionHandlers,
  categoryHandler: (id: string) => void
}


export const List: FC<ListProps> = ({state, sectionHandlers, dispatch, categoryHandler}) => {
  const [isModalOpen, setModal] = useState(false);
  const onSubmitHandler = (label: string) => {
    const newCategoryId = uuid();
    creatorCreator(CategoriesActions.CREATE_CATEGORY, dispatch)({id: newCategoryId})(label);
    categoryHandler(newCategoryId);
    sectionHandlers.goToEdit()
  };


  const onClickCategory: MouseEventHandler<HTMLLIElement> = ({currentTarget: {id}}) => {
    if (Object.keys(state).includes(id)) {
      categoryHandler(id);
      sectionHandlers.goToRandomize();
    }
  };
  return (
    <>
      <Main>
        <ul>
          {!!Object.keys(state).length &&
            Object.values(state).map(({id, label, items}: Category) => (
            <ItemList id={id} key={id} onClick={onClickCategory}>
              <h2>
                {label}
              </h2>
              <small>
                {Object.keys(items).length} item{Object.keys(items).length === 1 ? '' : 's'}
              </small>
            </ItemList>
          ))}
        </ul>
        <AddModalForm
          title={`Add an item:`}
          open={isModalOpen}
          onSubmit={onSubmitHandler}
          onCancel={() => {setModal(false)}}
        />
      </Main>
      <Nav
        leftButton={<ArrowLeft size={32} onClick={sectionHandlers.goToRandomize}/>}
        cta={<Add size={48}/>}
        ctaOnclick={() => {
          setModal(true)
        }}
        rightButton={<Settings size={32} onClick={sectionHandlers.goToSettings}/>}
      />
    </>
  );
};

