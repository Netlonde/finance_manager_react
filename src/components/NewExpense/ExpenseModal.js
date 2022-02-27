import React from "react";

import { NewExpenseContainer } from "../styled";

function ExpenseModal(props){
  function handleCLick(e){
    e.preventDefault();

    props.onClickAdd(true);
  }

  return(
    <NewExpenseContainer >
      <div className="expensemodal-isNewExpense">
        <button onClick={handleCLick}>Add New Expense</button>
      </div>
    </NewExpenseContainer>
  )

}

export default ExpenseModal;
