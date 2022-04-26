import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = function (props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [state, setState] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = e => {
    setTitle(e.target.value);
    // setState(prevState => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const amountChangeHandler = e => {
    setAmount(e.target.value);
    // setState({ ...state, amount: e.target.value });
  };

  const dateChangeHanlder = e => {
    setDate(e.target.value);
    // setState({ ...state, date: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              min="2020-01-01"
              max="2023-12-31"
              value={date}
              onChange={dateChangeHanlder}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          {/* When this button is click then hide the form */}
          <button type="button" onClick={props.onHide}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;

/**
 * Using one state instead (and what's better)
 * Ensure that the other two pieces of data don't get lost. If we would just set our new user input state to the object
 * It would basically dump the other keys, because when we update the state React will not merge with the old state
 * It will simply replace old state with the new one. If the new one is an object with one key value pair
 * The old state will be replaced and therefore the other two key value pairs (amount and date) will be lost
 * So if we want one state approach and we manage such an object. It's our responsibility that the other date does not get lost.
 * To do that, manually need to copy the other key value pairs which we are not updating.
 * So, if we are updating the title we also want to copy the existing values for amount and date. One way of doing that is to use
  spread operator and spread the state and override the title
 * By doing that, we ensure that the others values aren't thrown away but are also part of the new state
 */

/**
 * Updating state that depends on the previous sate
 * Using an alternative form of this state updating function. Call it and pass in a function to that function setState (() => {})
 * The function inside the setState() will automatically be executed by React
 * It will receive the prevState snapshot for that state for which we are calling the updating function. In this case, for this object state above: setState ((prevState) => {})
 * So we'll get the prevState snapshot and we should return the new state snapshot and that now could be our object where we copy in the
  key value pairs from the previous state with spread operator and then override the title with e.target.value 
 */

/**
 * Adding Two-Way binding
 */
