import styled from 'styled-components';

export const StyledCart = styled.div`
  padding: 1.2rem 1.8rem;

  & .cart__title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  & .cart__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-neutral-dark);
  }

  & .cart__item-name,
  .cart__item-price {
    font-size: 1.6rem;
    font-weight: 500;
  }

  & .cart__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  & .cart__total-title,
  .cart__total-amount {
    font-size: 1.6rem;
    font-weight: 600;
  }

  & .cart__total-title {
    color: var(--color-gray);
  }

  & .cart__total-amount {
    color: var(--color-primary);
  }

  & .cart__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > button:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
`;
