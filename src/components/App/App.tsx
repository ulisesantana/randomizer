import React, {MouseEventHandler, useEffect, useReducer} from "react";
import {CategoriesActions, getInitialState, ItemPayload, rootReducer} from "../../state";
import uuid from "uuid";
import {copyToClipboard} from "../../utils";

export const App = () => {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(rootReducer, initialState);

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

  const stateExportHandler: MouseEventHandler = () => {
    copyToClipboard(JSON.stringify(state, null, 2))
  };

  return (
    <>
      <pre>
        {!!Object.keys(state).length && (
          <code>
            {JSON.stringify(state, null, 2)}
          </code>
        )}
      </pre>
      <button onClick={stateExportHandler}>COPY STATE</button>
    </>
  );
};

export default App;
