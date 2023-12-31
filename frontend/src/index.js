import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import { GlobalProvider } from "./Context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
