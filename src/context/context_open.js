import { createContext, useState } from "react";

export const maincontext = createContext();

const Prodeutscontext = (props) => {
  const [mainpro, setmai] = useState(false);
  const toggleDrawer = (AA) => {
    setmai(AA);
  };
  return (
    <maincontext.Provider value={{ mainpro, setmai, toggleDrawer }}>
      {props.children}
    </maincontext.Provider>
  );
};

export default Prodeutscontext;
