import styled from 'styled-components';

export const StyledInputText = styled.input`
  width: ${props => (props.size === 'sm' ? '5rem' : '100%')};
  text-align: ${props => (props.size === 'sm' ? 'center' : 'left')};
  padding: 0.4rem 0.8rem;
  font-family: inherit;
  appearance: none;
  outline: none;
  border: 1px solid var(--color-neutral-dark);
  border-radius: 0.3rem;
`;

export const StyledInputLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;
