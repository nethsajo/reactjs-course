import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import MealItemForm from './MealItemForm';
import { StyledMealItem } from 'shared/styles/componentStyles/mealStyles';

const MealItem = props => {
  const context = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = quantity => {
    context.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      quantity: quantity,
    });
  };

  return (
    <StyledMealItem>
      <div className="meal__item">
        <h3 className="meal__name">{props.meal.name}</h3>
        <p className="meal__description">{props.meal.description}</p>
        <p className="meal__price">{price}</p>
      </div>
      <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
    </StyledMealItem>
  );
};

export default MealItem;
