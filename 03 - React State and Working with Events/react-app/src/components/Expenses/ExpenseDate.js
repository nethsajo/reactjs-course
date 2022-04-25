import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = function (props) {
  const formatMonth = date => {
    return date.toLocaleString(navigator.language, { month: 'long' });
  };

  return (
    <div className="expense-date">
      <h3 className="expense-date__month">{formatMonth(props.date)}</h3>
      <p className="expense-date__year">{props.date.getFullYear()}</p>
      <p className="expense-date__day">{props.date.getDay()}</p>
    </div>
  );
};

export default ExpenseDate;
