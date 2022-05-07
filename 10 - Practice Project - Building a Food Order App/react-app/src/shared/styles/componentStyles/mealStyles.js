import styled from 'styled-components';

export const StyledMealItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2.4rem;
  padding-bottom: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
    border-bottom: 0.1rem solid var(--color-neutral-dark);
  }

  & .meal__item {
    font-size: 1.6rem;
    color: var(--color-gray);
  }

  & .meal__name {
    font-size: 1.8rem;
  }

  & .meal__description {
    font-style: italic;
  }

  & .meal__price {
    color: var(--color-primary);
    font-weight: 700;
  }
`;

export const StyledMealForm = styled.form``;
