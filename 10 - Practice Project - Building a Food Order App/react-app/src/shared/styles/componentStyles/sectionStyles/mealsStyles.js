import styled from 'styled-components';

export const StyledMeals = styled.section`
  position: relative;
  transform: translateY(-10rem);
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-primary-darkest);
  border-radius: var(--b-radius-base);
  padding: 1.2rem 2.4rem;
  text-align: center;

  & h2 {
    font-size: 2rem;
    margin-bottom: 2.4rem;
    color: var(--color-primary-lightest);
  }

  & p {
    font-size: 1.6rem;
    color: var(--color-neutral);

    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
`;

export const StyledAvailableMeals = styled.section`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  padding-bottom: 6.4rem;
`;
