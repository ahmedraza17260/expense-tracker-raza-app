import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransition = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransition);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
        <div class="copyRight">
          <small>
            <em>Made by Ahmed Raza</em>
          </small>
        </div>
      </form>
    </>
  );
};
