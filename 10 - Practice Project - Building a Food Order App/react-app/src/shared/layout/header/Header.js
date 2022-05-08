import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import CartContext from 'context/CartContext';
import { Button } from 'shared/elements';
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledHeaderImage,
} from 'shared/styles/componentStyles/headerStyles';

import mealsImage from '../../../assets/images/meals.jpg';

export const Header = props => {
  const context = useContext(CartContext);

  const numberOfItemsInCart = context.items.reduce((accumulator, current) => {
    return (accumulator += current.quantity);
  }, 0);

  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>ReactMeals</StyledHeaderTitle>
        <Button variant="normal" onClick={props.onShowCart}>
          <MdShoppingCart className="icon" />
          <span className="ml-xs">Cart</span>
          <span className="badge">{numberOfItemsInCart}</span>
        </Button>
      </StyledHeader>
      <StyledHeaderImage>
        <img src={mealsImage} alt="A table full of delicious foods!" />
      </StyledHeaderImage>
    </>
  );
};
