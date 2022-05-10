import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const isInCart = state.items.find(index => index.id === action.payload.id);

    if (isInCart) {
      const tempCart = state.items.map(item => {
        if (item.id === action.payload.id) {
          let newQuantity = item.quantity + action.payload.quantity;
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      return { ...state, items: tempCart };
    } else {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
  }

  if (action.type === 'UPDATE_ITEM_QUANTITY') {
    const tempCart = state.items.map(item => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'increment') {
          let newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        }

        if (action.payload.type === 'decrement') {
          let newQuantity = item.quantity - 1;
          if (newQuantity < 1) newQuantity = 1;
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });

    return { ...state, items: tempCart };
  }

  if (action.type === 'REMOVE_ITEM') {
    //With this check, we make sure that all items where the id is not equal to the action id are kept
    //This returns true and hence the items are kept
    //This returns a new array that is not equal to the payload id
    const tempCart = state.items.filter(item => item.id !== action.payload);

    return { ...state, items: tempCart };
  }

  return { ...state };
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: item });
  };

  const toggleItemQuantityFromCart = (id, type) => {
    dispatchCartAction({ type: 'UPDATE_ITEM_QUANTITY', payload: { id, type } });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    toggleItemQuantity: toggleItemQuantityFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
