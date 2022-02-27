import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseModal from "./ExpenseModal";

const NewExpense = (props) => {
  const [isNewExpense, setIsnewExpense] = useState(false)

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    };
    props.onAddExpense(expenseData);
  };

  function handleIsCreateANewExpense (isCreateNewExpense){
    setIsnewExpense(isCreateNewExpense);
  }

  return(
    <>
      {isNewExpense
        ? <ExpenseForm
            onSaveExpenseData={handleSaveExpenseData}
            onClickCancel={handleIsCreateANewExpense}
          />
        : <ExpenseModal onClickAdd={handleIsCreateANewExpense} />
      }
    </>
  )
};

export default NewExpense;
