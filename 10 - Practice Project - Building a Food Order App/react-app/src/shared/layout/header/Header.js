import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Button } from 'shared/elements';
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledHeaderImage,
} from 'shared/styles/componentStyles/headerStyles';

import mealsImage from '../../../assets/images/meals.jpg';

export const Header = props => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>ReactMeals</StyledHeaderTitle>
        <Button variant="normal">
          <MdShoppingCart className="icon" />
          <span className="ml-xs">Cart</span>
          <span className="badge">3</span>
        </Button>
      </StyledHeader>
      <StyledHeaderImage>
        <img src={mealsImage} alt="A table full of delicious foods!" />
      </StyledHeaderImage>
    </>
  );
};
