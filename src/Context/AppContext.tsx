import { ReactElement, useState } from "react";
import { Context } from "./Context";

interface Prop {
  children: ReactElement;
}

const AppContext = ({ children }: Prop) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
