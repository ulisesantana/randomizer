import React, {FC, useState} from "react";
import {Main, Nav, Input, ItemList, AddModalForm} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers} from "../utils";
import {
  CategoriesActions,
  creatorCreator, eraserCreator, updaterCreator
} from "../state";
import {ArrowLeft} from 'styled-icons/feather/ArrowLeft';
import {Plus as Add} from 'styled-icons/feather/Plus';
import {Settings} from 'styled-icons/feather/Settings';
import uuid from "uuid";

interface EditProps {
  nextCategory: string | undefined,
  category: Category,
  categoryHandler: (id: string) => void
  dispatch: Function,
  sectionHandlers: SectionHandlers
}

export const Edit: FC<EditProps> =
  ({category, nextCategory, categoryHandler, dispatch, sectionHandlers}) => {
    const [isModalOpen, setModal] = useState(false);
    const categoryEraser = () => {
      if (!!nextCategory) {
        categoryHandler(nextCategory);
        eraserCreator(CategoriesActions.DELETE_CATEGORY, dispatch)(category)()
      }
    };
    const categoryUpdater = updaterCreator(CategoriesActions.UPDATE_CATEGORY, dispatch)(category);
    const itemCreator = creatorCreator(CategoriesActions.CREATE_ITEM, dispatch);
    const itemUpdater = updaterCreator(CategoriesActions.UPDATE_ITEM, dispatch);
    const itemEraser = eraserCreator(CategoriesActions.DELETE_ITEM, dispatch);

    return (
      <>
        <Main>
          <h1>
            <Input
              value={category.label}
              onDelete={categoryEraser}
              onChange={categoryUpdater}
            />
          </h1>
          <ul style={{width: '100%'}}>
            {!!Object.keys(category.items).length &&
            Object.values(category.items).map(({id, label}: Item) => (
              <ItemList id={id} key={id + category.id}>
                <Input
                  value={label}
                  onDelete={itemEraser({categoryId: category.id, id})}
                  onChange={itemUpdater({categoryId: category.id, id})}
                />
              </ItemList>
            ))}
          </ul>
          <AddModalForm
            title={`Add an item:`}
            open={isModalOpen}
            onSubmit={itemCreator({categoryId: category.id, id: uuid()})}
            onCancel={() => {
              setModal(false)
            }}
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

