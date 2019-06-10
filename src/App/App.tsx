import React, {useReducer, useState} from "react";
import {getInitialState, rootReducer} from "../state";
import {Section, useSectionManager} from "../utils";
import {AppStyled} from "./App.styled";
import {List, Randomizer, Settings} from "../views";
import {Edit} from "../views/Edit";

export const App = () => {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [section, handlers] = useSectionManager();
  const [currentCategory, setCurrentCategory] = useState(Object.keys(state)[0]);
  const nextCategory = Object.keys(state).find(id => id !== currentCategory);

  return (
    <AppStyled>
      {section === Section.Randomize &&
        <Randomizer
          category={state[currentCategory]}
          sectionHandlers={handlers}
        />
      }
      {section === Section.List &&
        <List
          state={state}
          dispatch={dispatch}
          sectionHandlers={handlers}
          categoryHandler={setCurrentCategory}
        />
      }
      {section === Section.Edit &&
        <Edit
          nextCategory={nextCategory}
          category={state[currentCategory]}
          dispatch={dispatch}
          sectionHandlers={handlers}
          categoryHandler={setCurrentCategory}
        />
      }
      {section === Section.Settings &&
        <Settings
          state={state}
          dispatch={dispatch}
          section={section}
          sectionHandlers={handlers}
        />
      }
    </AppStyled>
  );
};

export default App;
