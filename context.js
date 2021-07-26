// basic
import { createContext } from "react";

// Create new context:
export const newContext = createContext();

// Create new provider component:
export const AppProvider = (props) => {
  return (
    // Render Provider provided by previously created context:
    <newContext.Provider value='hello world'>
      {props.children}
    </newContext.Provider>
  );
};
