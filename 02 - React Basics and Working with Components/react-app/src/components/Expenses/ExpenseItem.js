import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = function (props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">$ {props.amount}</p>
      </div>
    </Card>
  );
};

/**
 * In order to access the props that is pass to this component, we should have a one parameter in the function and that one parameter will be an object which holds all the received attributes as properties hence the name props for the overall concept.

 *The keys will be the attribute names defined here: <ExpenseItem title="" amount="" date="" />
Keys are title, amount and date. The values of course will be the values set in the component. 
So If we want to output the data the we passed in the component: Just do props(dot)key = props.title.

*/

export default ExpenseItem;
