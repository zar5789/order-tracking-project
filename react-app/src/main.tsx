import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./components/PopupContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PopupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PopupProvider>
  </React.StrictMode>
);
