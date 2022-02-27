import React from "react";
import { ExpenseDateContainer } from "../styled";


function ExpenseDate({date}){
  let formatedDate = new Date(date);
  return(
    <ExpenseDateContainer>
        <>
          <div className="expensedate-month">
            {formatedDate.toLocaleString('pt-BR', {month: 'long'})}
          </div>

          <div className="expensedate-year">
            {formatedDate.getFullYear()}
          </div>

          <div className="expensedate-day">
            {formatedDate.toLocaleString('pt-BR', {day: '2-digit'})}
          </div>
        </>
      </ExpenseDateContainer>
  )
}

export default ExpenseDate;
