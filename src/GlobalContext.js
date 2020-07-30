import React, { createContext, useState } from "react";

const initialState = [
  {
    name: "test user",
    id: 1,
    type: "admin"
  }
];

export const  GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  function updateData() {
    const newState = [
      ...state,
      {
        name: "test user",
        id: 2,
        type: "user"
      }
    ];
    setState(newState);
  }

  return (
    <GlobalContext.Provider
      value={{
        state: state,
        updateData: updateData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
