import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default { AppContext, AppProvider };

//Remember to add wrap  <AppProvider> component to index.js
//import and call const { } = useGlobalContext() to use
