import React from 'react';
import {
  StyledButtonNormal,
  StyledButtonPrimary,
} from 'shared/styles/componentStyles/buttonStyles';

export const Button = props => {
  return props.variant === 'normal' ? (
    <StyledButtonNormal
      type={props.type || 'button'}
      className={props.className}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </StyledButtonNormal>
  ) : (
    <StyledButtonPrimary
      type={props.type || 'button'}
      className={props.className}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </StyledButtonPrimary>
  );
};
