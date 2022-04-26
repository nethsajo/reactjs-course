import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = function (props) {
  const [filter, setFilter] = useState('2022');

  const getFilterYear = year => {
    console.log('In Expenses.js');
    //Store the selected value in state
    setFilter(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filter} onSaveFilterYear={getFilterYear} />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
