import React from 'react';
import { StyledCard } from 'shared/styles/componentStyles/cardStyles';

export const Card = props => {
  return <StyledCard>{props.children}</StyledCard>;
};
