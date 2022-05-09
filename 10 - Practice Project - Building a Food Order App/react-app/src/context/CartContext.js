import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
  toggleItemQuantity: (id, type) => {},
});

export default CartContext;
