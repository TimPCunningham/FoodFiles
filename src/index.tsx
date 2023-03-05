import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);