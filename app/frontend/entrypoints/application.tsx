import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
console.log("root", root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();