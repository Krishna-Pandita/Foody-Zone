import { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

const UserContextProvider = ({ children }) => {

  // ✅ MOVE INSIDE COMPONENT
  const [input, setinput] = useState("");
  const [Cate, setCate] = useState(food_items);

  const data = {
    input,
    setinput,
    Cate,
    setCate
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContextProvider;