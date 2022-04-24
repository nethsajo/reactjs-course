import React from 'react';
import './Card.css';

const Card = function (props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

/**
 * children - is a reserved name. We don't set a children prop to the Card component (ExpenseItem.js and Expenses.js).  
  
  The value of the special prop will always be the content between the opening and closing tags of the custom component. 
  
  So, in our case, the content between the opening and closing of card tag that will be the available props.children
 */
