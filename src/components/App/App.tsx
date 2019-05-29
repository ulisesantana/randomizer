import React, {useEffect, useReducer} from "react";
import {CategoryActions, getInitialState, ItemPayload, rootReducer} from "../../state";
import uuid from "uuid";

export const App = () => {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // This is just a demo. Delete after start using dispatch
  useEffect(() => {
    dispatch({type: CategoryActions.CREATE_ITEM, payload: {
      categoryId: "5ceed757fc13ae323d000018",
        id: uuid(),
        label: 'El rey'
      } as ItemPayload})
  }, []);

  return (
    <pre>
      {!!Object.keys(state).length && (
        <code>
          {JSON.stringify(state, null, 2)}
        </code>
      )}
    </pre>
  );
};

export default App;
