import React from "react";

import { ExpenseFilterContainer } from "../styled";

function ExpenseFilter(props){

  const handleDropdownChange = (e) => {
    props.onChangeFilter(e.target.value);
  }


  return(
    <ExpenseFilterContainer>
      <div className="expensefilter-control">
        <label>Filter by Year</label>

        <select value={props.selected} onChange={handleDropdownChange}>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
        </select>
      </div>
    </ExpenseFilterContainer>
  )
}

export default ExpenseFilter;
