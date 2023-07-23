import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/browser";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

worker.start();

root.render(<App />);
