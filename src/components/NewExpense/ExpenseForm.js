import React, {useState} from "react";

import { NewExpenseContainer } from "../styled";

function ExpenseForm(props){
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date
    }

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  }

  function handleClick(){
    props.onClickCancel(false);
  }

  return(
    <NewExpenseContainer onSubmit={handleSubmit}>
        <div className="newexpense-control">
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="newexpense-control">
          <input
            type="number"
            placeholder="Amount..."
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="newexpense-control">
          <input
            type="date"
            placeholder="Date..."
            min="2020-01-01"
            max="2023-01-01"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="newexpense-control">
          <button type="submit">Add Expense</button>
          <button type="submit" onClick={handleClick}>Cancel</button>
        </div>
    </NewExpenseContainer>
  )

}

export default ExpenseForm;
