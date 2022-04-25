import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = function (props) {
  const [title, setTitle] = useState(props.title);

  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated title!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {props.amount}</p>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

/**
 * In order to access the props that is pass to this component, we should have a one parameter in the function.
 * That one parameter will be an object which holds all the received attributes as properties hence the name props for the overall concept.

 * The keys will be the attribute names defined here: <ExpenseItem title="" amount="" date="" />
 * Keys are title, amount and date. The values of course will be the values set in the component. 
 * So If we want to output the data the we passed in the component: Just do props(dot)key = props.title.     
*/

/**
 * Listening to Events and Working with Event Handlers
 * In order to add an event on the element, we can add a special prop but it's not a prop which sets some value for this button
 * Its a prop which starts with 'on'
 * React exposes all these default events as props which start with 'on'
 * What this does is it adds an event lister (i.e click events to the button).
 * We just need to define what should happen when such a click occurs and we do that by assigning a value to the click event
 * The best practice on assigning a value to the click event of a button is to define a function before the return keyword
 * We can do that either with function keyword or by creating a const variable which holds an arrow function
 * If we add a parantheses on the value of onClick event of the button, JavaScript would execute when the button element is being parsed
 * The button element is being parsed when the JSX code is returned so it's then not executing clickHandler when the click occurs
 */

/**
 * Working with 'state'
 * useState allows us to define values as state where changes to these values should reflect in the component function being called
 * All these hooks must only be called inside of React component functions and they all just shouldn't be called in any nested functions
 * useState once a default state value. We basically create a special kind of variable.
 * We can therefore assign an initial value and simply pass this as an argument to useState
 * useState actually returns an array. The first element is the variable itself and the second element is that updating function
 */

/**
 * A closer look at the 'useState' hook
 * useState registers some state, so some value as a state for the component in which it is being called
 * It registers it for a specific component instance
 * For example ExpenseItem component is being used four times in Expenses.js
 * Every ExpenseItem receives its own separate state which detached from the other state
 * In a nutshell, using state is simple though. We just register state with useState.
 * Always get back two values. The variable itself and the updating function. We call the updating function whenever the state 
  should change and we use the first element whenever we want to use the state value like for outputting in the JSX
 * React will do the rest and it will re-execute the component function and re-evaluate the JSX code therefore whenever the state changes
 *
 */
export default ExpenseItem;
