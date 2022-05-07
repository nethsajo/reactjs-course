import styled from 'styled-components';

const StyledButtonExtend = styled.button`
  position: relative;
  font-family: inherit;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: var(--transition);
`;

export const StyledButtonNormal = styled(StyledButtonExtend)`
  color: var(--color-gray);
  font-weight: 500;
`;

export const StyledButtonPrimary = styled(StyledButtonExtend)`
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--b-radius-full);
  padding: 0.4rem 1.2rem;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
