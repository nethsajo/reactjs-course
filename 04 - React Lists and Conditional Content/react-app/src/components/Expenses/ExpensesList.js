import React from 'react';
import ExpenseItem from './ExpenseItem';
import Message from '../UI/Message';

import './ExpensesList.css';

const ExpensesList = function (props) {
  if (props.expenses.length === 0)
    return <Message message="no expenses found" />;

  return (
    <ul className="expenses-list">
      {props.expenses.length > 0 &&
        props.expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
