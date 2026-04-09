import "./index.css";  
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./src/pages/Home";   // ✅ CORRECT
import UserContextProvider from "./src/contextApi/UserContext"; // ✅ CORRECT

const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);