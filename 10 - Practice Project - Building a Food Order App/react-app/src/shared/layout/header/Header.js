import React, { useState, useEffect, useContext } from 'react';
import CartContext from 'context/CartContext';
import { MdShoppingCart } from 'react-icons/md';
import { Button } from 'shared/elements';
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledHeaderImage,
} from 'shared/styles/componentStyles/headerStyles';

import mealsImage from '../../../assets/images/meals.jpg';

export const Header = props => {
  const context = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = context;

  const numberOfItemsInCart = items.reduce((accumulator, current) => {
    return (accumulator += current.quantity);
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>ReactMeals</StyledHeaderTitle>
        <Button
          variant="normal"
          onClick={props.onShowCart}
          className={btnIsHighlighted ? 'bump' : ''}
        >
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
