import styled from "styled-components";


export const ExpenseItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;

  .expenseitem-description{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    flex-flow: column-reverse;
    justify-content: flex-start;
    flex: 1;
  }

  .expenseitem-description h2{
    font-size: 1.25rem;
    margin: 0 1rem;
    color: #fff;
  }

  .expenseitem-price{
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background-color: #40005d;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 12px;
  }

  @media (max-width: 580px) {
    .expenseitem-description{
      flex-direction: row;
      align-items: center;
    }

    .expenseitem-price{
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

export const ExpenseDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  background-color: #2a2a2a;
  border: 1px solid #ececec;
  color: #fff;
  border-radius: 12px;

  .expensedate-month{
    font-size: 0.75rem;
    font-weight: 700;
  }

  .expensedate-year{
    font-size: 0.75rem;
  }

  .expensedate-day{
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const ExpenseContainer = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  text-align: center;

  .expenses-noExpense{
    font-weight: bold;
    margin: 3.5rem;
    color: #fff;
  }
`;

export const NewExpenseContainer = styled.form`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  button{
    font: inherit;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: #fff;
    border-radius: 12px;
    margin-right: 1rem;
    transition: all ease-in-out 200ms;
  }

  button:hover,
  button:active{
    background-color: #510674;
    border-color: #510674;
  }

  .newexpense-control input{
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .expensemodal-isNewExpense{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ExpenseFilterContainer = styled.form`
  color: #fff;
  padding: 0 1rem;

  label{
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select{
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }

  .expensefilter-control{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }
`;

export const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export const ChartBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .chartbar-inner{
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .chartbar-fill{
    background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
  }

  .chartbar-label{
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
  }
`;
