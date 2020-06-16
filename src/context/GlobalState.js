/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initail State

const initialState = {
  transaction: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Privoder Components
export const GlobalProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {childern}
    </GlobalContext.Provider>
  );
};

// { id: 1, text: "Flower", amount: -20 },
// { id: 2, text: "Salary", amount: 300 },
// { id: 3, text: "Book", amount: -10 },
// { id: 4, text: "Camera", amount: 150 },
