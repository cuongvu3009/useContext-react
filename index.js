import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { NewProvider } from "./context";

// Import new email provider:
import { EmailProvider } from "./email-context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* Add email provider as another wrapper of the App component: */}
    <EmailProvider>
      <NewProvider>
        <App />
      </NewProvider>
    </EmailProvider>
  </StrictMode>,
  rootElement
);
