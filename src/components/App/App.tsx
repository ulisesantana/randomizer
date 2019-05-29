import React from "react";
import {categories} from "./data";
import {Category} from "../../types";

export const App = () => {

  return (
    <pre>
      {!!Object.keys(categories).length && Object.values(categories).map((c: Category) => (
        <code>
          {JSON.stringify(c, null, 2)}
        </code>)
      )}
    </pre>
  );
};

export default App;
