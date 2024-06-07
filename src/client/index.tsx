import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development")
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );

const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Unable to find root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
