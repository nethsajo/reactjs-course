import styled from 'styled-components';

export const StyledCart = styled.div`
  padding: 1.2rem 1.8rem;

  & .cart__list {
    max-height: 20rem;
    overflow-y: auto;
  }

  & .cart__title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  & .cart__message {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
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

  & .cart__item-control {
    display: flex;
    align-items: center;
  }

  & .cart__item-btn {
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-primary);
    border-radius: var(--b-radius-full);
    background: transparent;
    cursor: pointer;
    transition: var(--transition);

    &:not(:last-child) {
      margin-right: 1.2rem;
    }

    &:hover {
      color: var(--color-neutral);
      background-color: var(--color-primary);
    }
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
