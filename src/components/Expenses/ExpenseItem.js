import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import {ExpenseItemContainer} from "../styled";

function ExpenseItem({item}){
  return(
    <Card>
      <ExpenseItemContainer >
        <ExpenseDate date={item.date}/>
        <div className="expenseitem-description">
          <h2>{item.title}</h2>
          <div className="expenseitem-price">R${item.amount}</div>
        </div>
      </ExpenseItemContainer>
    </Card>
  )
}

export default ExpenseItem;
