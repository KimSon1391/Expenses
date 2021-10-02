import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");

  const selectedYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filterExpenseYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseChart items={filterExpenseYear} />
      <ExpenseFilter
        selected={enteredYear}
        onFilterChange={selectedYearHandler}
      />
      <ExpenseList items={filterExpenseYear} />
    </Card>
  );
};

export default Expenses;
