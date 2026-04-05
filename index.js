import "./index.css";  
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/Home";   // ✅ IMPORT HOME

const App = () => {
  return <Home />;   // ✅ RENDER HOME
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

