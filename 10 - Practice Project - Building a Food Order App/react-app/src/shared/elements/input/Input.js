import React from 'react';
import {
  StyledInputText,
  StyledInputLabel,
} from 'shared/styles/componentStyles/input';

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex-center">
      <StyledInputLabel className="mr-xs" htmlFor={props.input.id}>
        {props.label}
      </StyledInputLabel>
      <StyledInputText ref={ref} {...props.input} size={props.size} />
    </div>
  );
});
