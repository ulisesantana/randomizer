import React, {useEffect, useReducer} from "react";
import {CategoriesActions, getInitialState, ItemPayload, rootReducer} from "../state";
import uuid from "uuid";
import {Section, useSectionManager} from "../utils";
import {AppStyled} from "./App.styled";
import {Randomizer} from "../views";

export const App = () => {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [section, handlers] = useSectionManager();

  // This is just a demo. Delete after start using dispatch
  useEffect(() => {
    dispatch({
      type: CategoriesActions.CREATE_ITEM, payload: {
        categoryId: "5ceed757fc13ae323d000018",
        id: uuid(),
        label: 'El rey'
      } as ItemPayload
    })
  }, []);
  //
  // const stateExportHandler: MouseEventHandler = () => {
  //   copyToClipboard(JSON.stringify(state, null, 2))
  // };

  return (
    <AppStyled>
      {section === Section.Randomize &&
        <Randomizer
          category={state["5ceed757fc13ae323d000018"]}
          sectionHandlers={handlers}
        />
      }
      {section === Section.List &&
        <Randomizer
          category={state["5ceed757fc13ae323d000018"]}
          sectionHandlers={handlers}
        />
      }
      {section === Section.Edit &&
        <Randomizer
          category={state["5ceed757fc13ae323d000018"]}
          sectionHandlers={handlers}
        />
      }
      {section === Section.Settings &&
        <Randomizer
          category={state["5ceed757fc13ae323d000018"]}
          sectionHandlers={handlers}
        />
      }
    </AppStyled>
  );
};

export default App;
