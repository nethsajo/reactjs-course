import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const items = state.items.concat(action.payload);
      const totalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;
      return {
        ...state,
        items: items,
        totalAmount: totalAmount,
      };
    default:
      console.log('DEFAULT');
  }
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
