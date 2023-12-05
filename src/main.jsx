import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { userProvider } from "./context/user.context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <userProvider>
      <App />
    </userProvider>
  </React.StrictMode>
);
