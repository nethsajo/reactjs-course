import React from 'react';
import MealItemForm from './MealItemForm';
import { StyledMealItem } from 'shared/styles/componentStyles/mealStyles';

const MealItem = props => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <StyledMealItem>
      <div className="meal__item">
        <h3 className="meal__name">{props.meal.name}</h3>
        <p className="meal__description">{props.meal.description}</p>
        <p className="meal__price">{price}</p>
      </div>
      <MealItemForm></MealItemForm>
    </StyledMealItem>
  );
};

export default MealItem;
