import React from 'react';
import { styled } from 'shared/theme';

export const Card = props => {
  return (
    <CardWrapper className={props.className}>{props.children}</CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.05);
  padding: 1.8rem 2.4rem;
  border-radius: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`;
