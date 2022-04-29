import React from 'react';
import { styled } from 'shared/theme';

export const Button = ({ type, className = '', children, ...restProps }) => {
  return (
    <ButtonWrapper type={type || 'button'} className={className} {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: auto;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }

  @media (max-width: ${props => props.theme.screens.sm}) {
    width: 100%;
  }
`;
