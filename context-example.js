// Adding state to the context provider

// Import createContext() method and useState hook from React:
import { createContext, useState } from "react";

// Create new context:
export const newContext = createContext();

// Create new provider component:
export const NewProvider = (props) => {
  // Create local state:
  const [state, setState] = useState("");

  // Prepare values to share:
  const val = {
    state, // The state itself
    setState, // The state update function
  };

  return (
    // Set "val" as the value for "value" attribute:
    <newContext.Provider value={value}>{props.children}</newContext.Provider>
  );
};
