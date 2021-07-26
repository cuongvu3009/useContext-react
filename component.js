//how to use useContext

import { useContext } from "react";

import { newContext } from "./context";

// Import new email context:
import { emailContext } from "./email-context";

export default function App() {
  const { state, setState } = useContext(newContext);

  // Access the email and setEmail values in emailContext:
  const { email, setEmail } = useContext(emailContext);

  return (
    <div>
      {/* Render the value of "email": */}
      <h1>
        Hello {state}, {email}
      </h1>

      <h2>Change name:</h2>
      <input type='text' onChange={(e) => setState(e.target.value)} />

      <h2>Change email:</h2>
      {/*
        Allow to to update the current value of "email"
        via the "setEmail" update function and text input:
      */}
      <input type='text' onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}
