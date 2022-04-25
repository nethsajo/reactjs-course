import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = function (props) {
  const { expenses } = props;
  const [filter, setFilter] = useState('2023');

  const getFilterValue = value => {
    console.log('In Expenses.js');
    //Store the selected value in state
    setFilter(value);
    console.log(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filter}
        onSaveFilterValue={getFilterValue}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
