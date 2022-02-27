import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import { ExpenseContainer } from "../styled";

function Expenses({expenses}){
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  expenses.forEach((expense) => {
    expense.date = new Date(expense.date);
  })

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <Card>
      <ExpenseContainer>
        <ExpenseFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
        <ExpensesChart expenses={filteredExpenses}/>
        { filteredExpenses.length === 0
          ? <p className="expenses-noExpense">No expenses Found.</p>
          : filteredExpenses.map((expense) => (
              <ExpenseItem key={expense.id} item={expense}/>
            ))}
      </ExpenseContainer>
    </Card>
  )
}

export default Expenses;
