import React from "react";
import { StoreContext } from "../../context/StoreContext";

export const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
