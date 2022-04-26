import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = function (props) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = data => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {/* In here, we need to convert the showForm to true so therefore React will render this first
        When this button is click then show the form 
      */}
      {!showForm && (
        <button type="button" onClick={handleShowForm}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHide={handleHideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
