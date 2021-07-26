// email-context.jsx - example how to use multiple context

// Import createContext() method from React:
import { createContext, useState } from "react";

// Create new context:
export const emailContext = createContext();

// Create new email provider component:
export const EmailProvider = (props) => {
  // Create local state for email:
  const [email, setEmail] = useState("");

  // Prepare values for sharing:
  const val = {
    email,
    setEmail,
  };

  // Render emailContext.Provider exposing "val" variable:
  return (
    <emailContext.Provider value={val}>
      {/* Render children components: */}
      {props.children}
    </emailContext.Provider>
  );
};
