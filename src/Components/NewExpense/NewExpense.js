import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseHandler = (expense) => {
    const saveExpenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(saveExpenseData);

    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditing}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditing}
          onAddNewExpense={addNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
