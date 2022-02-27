import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021,1,1)
  }
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const handleaddExpense = expenseData => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  }

  return (
    <>
      <NewExpense onAddExpense={handleaddExpense}/>
      <Expenses expenses={expenses}/>
    </>
  );
}

export default App;
