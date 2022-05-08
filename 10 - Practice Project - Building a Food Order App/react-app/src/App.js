import React, { useState } from 'react';
import { Header } from './shared/layout';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './context/CartProvider';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };

  const hideCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
