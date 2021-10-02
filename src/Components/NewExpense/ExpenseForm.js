import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const enteredTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const enteredAmountHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const enteredDateHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpensesData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    setNewTitle("");
    setNewAmount("");
    setNewDate("");

    props.onAddNewExpense(newExpensesData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={enteredTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
