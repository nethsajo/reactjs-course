import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = function () {
  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 16),
    },
    {
      id: 2,
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 11, 15),
    },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 3, 23),
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 4, 2),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

/**
 * Props - a props which stands for 'properties' is a data that we can pass to the custom components by adding an attribute and inside of that component 
 * We can then get access to all these attributes which might have been set on our custom component

*/
