import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import { INITIAL_EXPENSES } from './data';

const App = function () {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div className="container">
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
