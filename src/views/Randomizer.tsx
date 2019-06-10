import React, {FC, MouseEventHandler, useState} from "react";
import {Nav, Main, ItemList, Modal} from "../components";
import {Category, Item} from "../types";
import {SectionHandlers, shuffle} from "../utils";
import {Shuffle} from 'styled-icons/feather/Shuffle';
import {Edit} from 'styled-icons/feather/Edit';
import {ListUl as List} from 'styled-icons/fa-solid/ListUl';
import {CloseO as Close} from 'styled-icons/evil/CloseO';

interface RandomizerProps {
  category: Category,
  sectionHandlers: SectionHandlers
}

export const Randomizer: FC<RandomizerProps> = ({category, sectionHandlers}) => {
  const [modalIsOpen, setModal] = useState(false);

  const onFocusOut: MouseEventHandler = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const onRandom = () => {
    setModal(true);
  };

  return (
    <>
      <Main>
        <h1>{category.label}</h1>
        <ul>
          {!!Object.keys(category.items).length && Object.values(category.items).map(({id, label}: Item) => (
            <ItemList id={id} key={id}>
              {label}
            </ItemList>
          ))}
        </ul>
        <Modal open={modalIsOpen} onFocusOut={onFocusOut}>
          {category.items[shuffle(Object.keys(category.items))].label}
          <Close size={48} onClick={onFocusOut}/>
        </Modal>
      </Main>
      <Nav
        leftButton={<Edit size={36} onClick={sectionHandlers.goToEdit}/>}
        cta={<Shuffle size={48}/>}
        ctaOnclick={onRandom}
        rightButton={<List size={36} onClick={sectionHandlers.goToList}/>}
      />
    </>
  );
};

